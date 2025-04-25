import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Disc3 } from "lucide-react";
import { Track } from "../types";

function Disc() {
  return (
    <Flex justify="center" mb={6}>
      <Box position="relative">
        {/* CD Container */}
        <Box
          w="48"
          h="48"
          rounded="full"
          bgGradient="linear(to-br, gray.700, gray.900)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          overflow="hidden"
        >
          {/* CD Label */}
          <Box
            w="16"
            h="16"
            rounded="full"
            bg="gray.600"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex="10"
          >
            <Box w="4" h="4" rounded="full" bg="gray.700"></Box>
          </Box>

          {/* CD Reflection */}
          <Box
            position="absolute"
            inset="0"
            borderColor="gray.700"
            // bgGradient="linear(to-br, transparent, gray.500/10, white/20)"
            rounded="full"
          ></Box>

          {/* CD Tracks */}
          <Box
            position="absolute"
            inset="4"
            rounded="full"
            border="2px"
            borderColor="gray.700"
          ></Box>
          <Box
            position="absolute"
            inset="8"
            rounded="full"
            border="2px"
            borderColor="gray.700"
          ></Box>
          <Box
            position="absolute"
            inset="12"
            rounded="full"
            border="2px"
            borderColor="gray.700"
          ></Box>
        </Box>

        {/* Reflection overlay */}
        <Box
          position="absolute"
          inset="0"
          backgroundImage="linear-gradient(to right bottom, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1))"
          rounded="full"
          pointerEvents="none"
        ></Box>
      </Box>
    </Flex>
  );
}

export default function TrackPlayer({
  track,
  previewSeconds,
  delaySeconds,
  waiting,
  setPlayedTracks,
}: {
  track?: Track | null;
  previewSeconds: number;
  delaySeconds: number;
  waiting: boolean;
  setPlayedTracks: React.Dispatch<React.SetStateAction<Track[]>>;
}) {
  const [playState, setPlayState] = useState<string>("");
  const audioPlayer = useRef<HTMLAudioElement>(null);

  let trackPreviewUrl = track?.preview_url;

  useEffect(() => {
    if (track && trackPreviewUrl) {
      setPlayState("forward");
      let timeout = setTimeout(() => {
        audioPlayer.current?.pause();
        setPlayState("backward");
        timeout = setTimeout(() => {
          setPlayState("");
        }, delaySeconds);
        setPlayedTracks((tracks) => [track, ...tracks]);
      }, previewSeconds * 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [track, trackPreviewUrl, previewSeconds, setPlayedTracks]);

  const getAnimationStyle = () => {
    return playState
      ? {
          animation: playState,
          animationDuration:
            playState === "forward" ? `${previewSeconds}s` : `${delaySeconds}s`,
        }
      : {};
  };
  const handleTimeUpdate = (audioElement: HTMLAudioElement) => {
    // console.log("audio element ..", audioElement);
    // let curTime = audioElement.currentTime;
  };

  return (
    <>
      <Box>
        {trackPreviewUrl && (
          <audio
            style={{ display: "none" }}
            ref={audioPlayer}
            key={trackPreviewUrl}
            controls
            autoPlay
            onTimeUpdate={(evt) => {
              handleTimeUpdate(evt.target as HTMLAudioElement);
            }}
          >
            <source src={trackPreviewUrl} type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}

        <Box bg="gray.800" p={6} rounded="lg" shadow="xl">
          <Box display={"flex"} justifyContent={"center"} mb={8}>
            <Disc3
              size={120}
              className={[
                "disc-player",
                waiting && "waiting",
                playState === "backward" && "rewind",
                playState === "forward" && "playing",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          </Box>

          {/* <Text mt={4} textAlign="center" fontSize="sm" color="gray.400">
            Time Remaining: 0:{30 - Math.floor(progress / 3.33)}
          </Text> */}
          {waiting && (
            <Box mb={2}>
              <Text>Please wait for the next track..</Text>
            </Box>
          )}
          <Box
            mt={2}
            w="full"
            h="1"
            bg="gray.700"
            rounded="full"
            overflow="hidden"
          >
            <Box position="relative" height="5px" key={trackPreviewUrl}>
              <Box
                position="absolute"
                className="progress-bar"
                left={0}
                top={0}
                background="green.400"
                height="100%"
                style={{
                  ...getAnimationStyle(),
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
