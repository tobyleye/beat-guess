import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { PlayersList } from "../components/players-list";
import { AnswerInput } from "../components/answer-input";
import { PastSongs } from "../components/past-songs";
import { UserHeader } from "../header";
import { useParams } from "react-router";
import AppWebSocket from "../socket";
import { useEffect, useState } from "react";
import TestTrackSelector from "./test-tracks";
import TrackPlayer from "./track-player";
import { Track } from "../types";

// const DEFAULT_PREVIEW_SECONDS = 30;
// const DEFAULT_DELAY_SECONDS = 5;
// const DEFAULT_TRACKS_PER_ROUND = 15;

export default function RoomPage({ socket }: { socket: AppWebSocket }) {
  const params = useParams<{ roomId: string }>();
  const { roomId } = params;
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [roomJoined, setRoomJoined] = useState(false);
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [waitingForRoom, setWaitingForRoom] = useState(true);
  const [playedTracks, setPlayedTracks] = useState<Track[]>([]);

  const [roomInfo, setRoomInfo] = useState<null | {
    tracksPerRound: number;
    previewSeconds: number;
    delaySeconds: number;
  }>(null);

  useEffect(() => {
    if (roomId && socket) {
      const handleRoomJoined = (data: any) => {
        console.log("data!", data);
        let {
          players,
          player,
          tracksPerRound,
          currentTrackIndex,
          previewSeconds,
          delaySeconds,
          state,
        } = data;

        setPlayers(players || []);
        setPlayer(player || null);
        setCurrentTrackIndex(currentTrackIndex);
        setRoomInfo({
          tracksPerRound: tracksPerRound,
          previewSeconds: previewSeconds,
          delaySeconds: delaySeconds,
        });

        // if room is currently playing
        if (state === "playing") {
          setWaitingForRoom(true);
        } else {
          setWaitingForRoom(false);
        }

        setRoomJoined(true);
      };

      socket.on("room", handleRoomJoined);

      socket.emit("joinRoom", {
        roomId,
      });
    }
  }, [roomId, socket]);

  useEffect(() => {
    return () => {
      if (roomJoined && socket) {
        socket.emit("leaveRoom", roomId);
      }
    };
  }, [roomJoined, socket, roomId]);

  useEffect(() => {
    const playTrack = (track: any) => {
      setCurrentTrack(track);
      setWaitingForRoom(false);
    };

    const updatePlayers = (players: any) => {
      setPlayers(players);
    };

    if (socket) {
      socket.on("playTrack", playTrack);
      socket.on("players", updatePlayers);

      return () => {
        socket.remove("playTrack", playTrack);
        socket.remove("players", updatePlayers);
      };
    }
  }, [socket]);

  return (
    <Flex direction="column" minH="100vh" bg="gray.900" color="white">
      <UserHeader />
      {currentTrack && (
        <div>
          <div>title: {currentTrack.name}</div>
          <div>
            artists: {currentTrack.artists.map((a) => a.name).join(", ")}
          </div>
        </div>
      )}
      {roomJoined && (
        <Box as="main" flex="1" py={8}>
          <Container maxW="6xl">
            <Heading as="h1" size="lg" mb={6}>
              Room: {params.roomId}
            </Heading>

            <Flex direction={{ base: "column", lg: "row" }} gap={8}>
              <Flex direction="column" flex={1} gap={8}>
                {/* <CassettePlayer /> */}
                <TrackPlayer
                  waiting={waitingForRoom}
                  track={currentTrack}
                  previewSeconds={roomInfo!.previewSeconds}
                  delaySeconds={roomInfo!.delaySeconds}
                  setPlayedTracks={setPlayedTracks}
                />
                <AnswerInput
                  socket={socket}
                  waiting={waitingForRoom}
                  track={currentTrack}
                  onSubmit={() => {}}
                />
                <PastSongs tracks={playedTracks} />
              </Flex>

              <Box w={{ base: "full", lg: "300px" }}>
                <PlayersList players={players} />
              </Box>
            </Flex>
          </Container>
        </Box>
      )}

      <Box as="footer" py={6} textAlign="center" fontSize="sm" color="gray.500">
        <Box>BeatGuess — Test your music knowledge</Box>
      </Box>
    </Flex>
  );
}
