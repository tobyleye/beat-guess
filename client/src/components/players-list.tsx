import { Box, Flex, Text, VStack, Avatar } from "@chakra-ui/react";
import { Player, Players } from "../types";

const mockPlayers = [
  {
    id: 1,
    name: "MusicMaster",
    score: 1200,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "RhythmKing",
    score: 950,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "MelodyQueen",
    score: 800,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "BeatExpert",
    score: 750,
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export function PlayersList({ players }: { players: Players }) {
  console.log("players....", players);
  return (
    <Box bg="gray.800" borderRadius="lg" p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Players
      </Text>
      <VStack spacing={3} align="stretch">
        {players.map((player) => (
          <Flex key={player.id} align="center" justify="space-between">
            <Flex align="center">
              <Avatar
                size="sm"
                name={player.name}
                src={player.picture}
                mr={2}
              />
              <Text fontWeight="medium">{player.name}</Text>
            </Flex>
            <Text color="brand.spotify">{player.score}</Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
