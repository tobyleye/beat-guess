import { Box, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { Music } from "lucide-react";

export function PastSongs({ tracks }: { tracks: any[] }) {
  return (
    <Box
      bg="gray.800"
      borderRadius="lg"
      p={4}
      maxHeight="300px"
      overflowY="auto"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Past Songs
      </Text>
      {!tracks || tracks.length === 0 ? (
        <Box>
          <Text color="gray.200">No track yet :)</Text>
        </Box>
      ) : (
        <VStack spacing={3} align="stretch">
          {tracks.map((track) => (
            <HStack key={track.id} spacing={3}>
              <Icon as={Music} color="brand.spotify" />
              <Box>
                <Text fontWeight="medium">{track.name}</Text>
                <Text fontSize="sm" color="gray.400">
                  {track.artists.map((artist: any) => artist.name).join(", ")}
                </Text>
              </Box>
            </HStack>
          ))}
        </VStack>
      )}
    </Box>
  );
}
