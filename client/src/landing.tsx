import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link as StyledLink,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router";
import { MusicNoteIcon } from "./icons/music-note";
import { SpotifyLogo } from "./icons/spotify-logo";
import { User } from "./types";
import { ReactNode } from "react";

export default function LandingPage({
  user,
  userMenu,
}: {
  user: User | null;
  userMenu: ReactNode;
}) {
  const navigate = useNavigate();

  return (
    <Flex direction="column" minH="100vh" bg="gray.900" color="white">
      <Box position="fixed" top={5} right={8}>
        {userMenu}
      </Box>
      <Flex flex="1" direction="column" align="center" justify="center" p={4}>
        <Container maxW="md">
          <Box>
            <Box textAlign="center">
              <Box as={MusicNoteIcon} h={16} w={16} color="brand.spotify" />
              <Heading
                mt={6}
                fontSize="4xl"
                fontWeight="extrabold"
                letterSpacing="tight"
              >
                BeatGuess
              </Heading>
              <Text mt={2} fontSize="lg" color="gray.400">
                Test your music knowledge in this multiplayer guessing game
              </Text>
            </Box>

            <Box mt={6} w="full">
              {user ? (
                <Box>
                  <Button
                    onClick={() => {
                      navigate("/rooms");
                    }}
                    loadingText="Connecting..."
                    variant="spotify"
                    size="lg"
                    width="full"
                    leftIcon={<SpotifyLogo boxSize={5} />}
                  >
                    <Text>Continue as {user.displayName} </Text>
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Button
                    onClick={() => {
                      window.location.assign(
                        "http://localhost:1234/login/spotify"
                      );
                    }}
                    loadingText="Connecting..."
                    variant="spotify"
                    size="lg"
                    width="full"
                    leftIcon={<SpotifyLogo boxSize={5} />}
                  >
                    <Text>Login with Spotify </Text>
                  </Button>

                  <Box mt={4} display={"flex"} justifyContent={"center"}>
                    <Button variant="link" textDecor={"underline"}>
                      Continue as guest
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Flex>

      <Box py={6} textAlign="center" fontSize="sm" color="gray.500">
        <Text>a thing built by Tobi</Text>
      </Box>
    </Flex>
  );
}
