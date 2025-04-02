import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link as StyledLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router";
import { MusicNoteIcon } from "./icons/music-note";
import { SpotifyLogo } from "./spotify-logo";
import { User } from "./types";

export default function LandingPage({ user }: { user: User | null }) {
  const navigate = useNavigate();

  return (
    <Flex direction="column" minH="100vh" bg="gray.900" color="white">
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
              {/* <SpotifyLoginButton /> */}
              <Button
                onClick={() => {
                  if (user) {
                    return navigate("/rooms");
                  } else {
                    window.location.assign(
                      "http://localhost:1234/login/spotify"
                    );
                  }
                }}
                loadingText="Connecting..."
                variant="spotify"
                size="lg"
                width="full"
                leftIcon={<SpotifyLogo boxSize={5} />}
              >
                {user ? (
                  <Box>
                    <Text>Continue as {user.displayName} </Text>
                  </Box>
                ) : (
                  `Login with Spotify`
                )}
              </Button>
              {/* <Box mt={4} display="flex" justifyContent="center">
                <Button variant="link" color="red.300">
                  Logout
                </Button>
              </Box> */}
              <Text mt={6} textAlign="center" fontSize="sm" color="gray.500">
                By continuing, you agree to our{" "}
                <StyledLink
                  as={Link}
                  href="/terms"
                  fontWeight="medium"
                  color="brand.spotify"
                  _hover={{ color: "brand.spotifyHover" }}
                >
                  Terms of Service
                </StyledLink>{" "}
                and{" "}
                <StyledLink
                  as={Link}
                  href="/privacy"
                  fontWeight="medium"
                  color="brand.spotify"
                  _hover={{ color: "brand.spotifyHover" }}
                >
                  Privacy Policy
                </StyledLink>
                .
              </Text>
            </Box>
          </Box>
        </Container>
      </Flex>

      <Box py={6} textAlign="center" fontSize="sm" color="gray.500">
        <Text>Not affiliated with Spotify AB</Text>
      </Box>
    </Flex>
  );
}
