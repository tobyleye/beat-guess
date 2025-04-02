"use client";

import { Box, Flex, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";

export function CassettePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box
      bg="gray.800"
      borderRadius="lg"
      p={6}
      boxShadow="xl"
      position="relative"
      overflow="hidden"
    >
      <Flex justify="center" mb={4}>
        <Box
          w="200px"
          h="125px"
          bg="gray.700"
          borderRadius="md"
          position="relative"
          overflow="hidden"
        >
          <Flex
            position="absolute"
            top="10px"
            left="10px"
            right="10px"
            bottom="10px"
            justify="space-between"
          >
            <Box w="40px" h="40px" borderRadius="full" bg="gray.600" />
            <Box w="40px" h="40px" borderRadius="full" bg="gray.600" />
          </Flex>
          <Box
            position="absolute"
            bottom="15px"
            left="50%"
            transform="translateX(-50%)"
            w="80%"
            h="20px"
            bg="gray.600"
            borderRadius="full"
          />
        </Box>
      </Flex>

      <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
        Guess the Song!
      </Text>

      <Flex justify="center" gap={4}>
        <IconButton
          aria-label="Previous song"
          icon={<Icon as={SkipBack} />}
          variant="ghost"
          fontSize="24px"
        />
        <IconButton
          aria-label={isPlaying ? "Pause" : "Play"}
          icon={<Icon as={isPlaying ? Pause : Play} />}
          variant="ghost"
          fontSize="24px"
          onClick={() => setIsPlaying(!isPlaying)}
        />
        <IconButton
          aria-label="Next song"
          icon={<Icon as={SkipForward} />}
          variant="ghost"
          fontSize="24px"
        />
      </Flex>

      <VStack spacing={1} mt={4}>
        <Text fontSize="sm" color="gray.400">
          Time Remaining: 0:30
        </Text>
        <Box w="full" h="2px" bg="gray.700">
          <Box w="50%" h="full" bg="brand.spotify" />
        </Box>
      </VStack>
    </Box>
  );
}
