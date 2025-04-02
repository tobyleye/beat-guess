"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import AppWebSocket from "../socket";
import { Track } from "../types";

const getRandomMessage = () => {
  const messages = [
    "❌ Nope! Give it another shot!",
    "🙃 Ooh, so close! Try again!",
    "😅 Not quite! Think again!",
    "🎵 Almost there! Keep guessing!",
    "🤔 Hmmm... Not the one. Try another!",
    "🙈 Good guess, but not it!",
    "😜 Nice try! Maybe another hint?",
    "🎶 Wrong note! Give it another go!",
    "🚀 You’re on the right track! Guess again!",
    "😆 Haha, not quite! One more time?",
    "💡 Getting warmer! Try again!",
    "🔍 Look closer! You might get it!",
    "🎯 Missed the mark! Aim again!",
    "🔥 Hot or cold? You're getting warmer!",
    "🤯 Oof! That was close. Try once more!",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

export function AnswerInput({
  socket,
  track,
}: {
  socket: AppWebSocket;
  track: Track | null;
  onSubmit: (input: string) => void;
  waiting: boolean;
}) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [guessedArtist, setGuessedArtist] = useState(false);
  const [guessedTitle, setGuessedTitle] = useState(false);

  useEffect(() => {
    // reset guessed
    setGuessedArtist(false);
    setGuessedTitle(false);
  }, [track]);

  useEffect(() => {
    if (socket) {
      const handleGuessResult = (data: any) => {
        console.log("data --", data);
        let { state, alreadyAnswered, correct } = data;
        if (state) {
          setGuessedArtist(state.guessedArtist);
          setGuessedTitle(state.guessedTitle);
        }
        if (alreadyAnswered) {
          setFeedback(
            `You already guessed the artist.. shouldn't get here though`
          );
        } else if (correct) {
          setFeedback("hehe... nice one");
          // score
        } else {
          setFeedback(getRandomMessage());
        }
      };

      socket.on("guessResult", handleGuessResult);

      return () => {
        socket.remove("guessResult", handleGuessResult);
      };
    }
  }, [socket]);

  useEffect(() => {
    if (feedback) {
      setTimeout(() => {
        setFeedback("");
      }, 3000);
    }
  }, [feedback]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let cleanAnswer = answer.toLowerCase();

    // let trackTitle = track.name.toLowerCase();
    // let trackArtists = track.artists.map((artist: any) => artist.name.to);

    if (!guessedTitle) {
      // do something
      socket.emit("submitGuess", {
        titleGuess: cleanAnswer,
        artistGuess: "",
      });
      console.log("guessed artists, waiting for result..");
    } else if (!guessedArtist) {
      // do another
      socket.emit("submitGuess", {
        titleGuess: "",
        artistGuess: cleanAnswer,
      });

      console.log("guessed artists, waiting for result..");
    } else {
      console.log("please wait for next song...");
    }
    setAnswer("");
  };

  let prompt;

  if (track) {
    if (!guessedTitle) {
      prompt = `Guess the title`;
    } else if (!guessedArtist) {
      prompt = `Guess the artist`;
    }
  }

  return (
    <Box bg="gray.800" borderRadius="lg" p={4}>
      <form onSubmit={handleSubmit}>
        <Box mb={1}>{prompt}</Box>
        <Flex>
          <Input
            disabled={!track}
            placeholder="Enter your guess..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            bg="gray.700"
            borderColor="gray.600"
            _focus={{ borderColor: "brand.spotify" }}
            mr={2}
          />
          <Button disabled={!track} type="submit" variant="spotify">
            Submit
          </Button>
        </Flex>
        <Box mt={1}>{feedback}</Box>
      </form>
    </Box>
  );
}
