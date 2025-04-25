import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Users, Music, Clock, Lock } from "lucide-react";
// import { CreateRoomButton } from "./create-room-button"
import { UserHeader } from "./components/header";
import AppWebSocket from "./socket";
import { Rooms } from "./types";

export function RoomsList({
  socket,
  rooms,
  setRooms,
}: {
  socket: AppWebSocket | null;
  rooms: Rooms;
  setRooms: (rooms: Rooms) => void;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (socket) {
      const handleRooms = (data: any) => {
        console.log("rooms:", data);
        let rooms = data.rooms as Rooms;
        setRooms(rooms);
        setIsLoading(false);
      };
      socket.on("rooms", handleRooms);

      socket.emit("getRooms");

      return () => {
        socket.remove("rooms", handleRooms);
      };
    }
  }, [socket]);

  const handleJoinRoom = (roomId: string) => {
    // In a real app, this would make an API call to join the room
    console.log(`Joining room: ${roomId}`);
    navigate(`/game/${roomId}`);
  };

  let firstTimeLoading = isLoading && rooms.length === 0;

  return (
    <Flex direction="column">
      <Box as="main" flex="1">
        <Container maxW="5xl" px={4} py={8}>
          <Flex justify="space-between" align="center" mb={8}>
            <Heading as="h1" size="lg">
              Game Rooms
            </Heading>
            {/* <CreateRoomButton /> */}
          </Flex>

          {firstTimeLoading ? (
            <RoomsListSkeleton />
          ) : rooms.length === 0 ? (
            <EmptyRoomsList />
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {rooms.map((room) => (
                <Box
                  key={room.id}
                  borderRadius="md"
                  overflow="hidden"
                  bg="gray.800"
                  borderColor="gray.700"
                  borderWidth="1px"
                >
                  <Box p={4} pb={2}>
                    <Flex justify="space-between" align="start">
                      <Text fontWeight="bold" fontSize="xl" color="white">
                        {room.name}
                      </Text>
                      {/* {room.isPrivate && (
                        <Tag size="sm" bg="gray.700" color="gray.300">
                          <Icon as={Lock} boxSize={3} mr={1} />
                          Private
                        </Tag>
                      )} */}
                    </Flex>
                    {/* <Text fontSize="sm" color="gray.400">
                      Hosted by {room.host}
                    </Text> */}
                  </Box>

                  <Box px={4} pb={4}>
                    <HStack fontSize="sm" color="gray.300" mb={1}>
                      <Icon as={Music} boxSize={4} />
                      <Text>room genre</Text>
                    </HStack>
                    <HStack fontSize="sm" color="gray.300" mb={1}>
                      <Icon as={Users} boxSize={4} />
                      <Text>5 players</Text>
                    </HStack>
                    <HStack fontSize="sm" color="gray.300">
                      <Icon as={Clock} boxSize={4} />
                      <Text>created at: unknown</Text>
                    </HStack>
                  </Box>

                  <Box p={3} bg="gray.900">
                    <Button
                      onClick={() => handleJoinRoom(room.id)}
                      width="full"
                      variant="spotify"
                    >
                      Join Room
                    </Button>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Container>
      </Box>

      <Box as="footer" py={6} textAlign="center" fontSize="sm" color="gray.500">
        <Box>BeatGuess — Test your music knowledge</Box>
      </Box>
    </Flex>
  );
}

function RoomsListSkeleton() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
      {[1, 2, 3].map((i) => (
        <Box
          key={i}
          borderRadius="md"
          bg="gray.800"
          borderColor="gray.700"
          borderWidth="1px"
        >
          <Box p={4}>
            <Skeleton height="24px" width="75%" mb={2} />
            <Skeleton height="16px" width="50%" mb={4} />
            <SkeletonText mt={2} noOfLines={3} spacing={2} />
          </Box>
          <Box p={3} bg="gray.900">
            <Skeleton height="40px" width="full" />
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}

function EmptyRoomsList() {
  return (
    <VStack textAlign="center" py={16} px={4} spacing={4}>
      <Icon as={Music} boxSize={16} color="gray.500" />
      <Text fontSize="xl" fontWeight="medium" color="white">
        No rooms available
      </Text>
      <Text color="gray.400" maxW="md" mx="auto">
        There are no active game rooms at the moment. Create a new room to start
        playing!
      </Text>
      <Box pt={2}>{/* <CreateRoomButton variant="spotify" /> */}</Box>
    </VStack>
  );
}
