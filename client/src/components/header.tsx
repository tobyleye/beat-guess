import { Link } from "react-router";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Link as StyledLink,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { LogOut, Music } from "lucide-react";
import { User } from "../types";
import { ReactNode } from "react";

export function UserHeader({ userMenu }: { userMenu: ReactNode }) {
  const handleLogout = () => {
    // In a real app, this would call your logout function
    window.location.href = "/";
  };

  return (
    <Box
      as="header"
      borderBottomWidth="1px"
      borderColor="gray.800"
      bg="gray.900"
    >
      <Container maxW="container.xl" px={4}>
        <Flex h="16" alignItems="center" justifyContent="space-between">
          <StyledLink
            as={Link}
            href="/rooms"
            _hover={{ textDecoration: "none" }}
          >
            <HStack spacing={2}>
              <Icon as={Music} boxSize={6} color="brand.spotify" />
              <Text fontSize="xl" fontWeight="bold" color="white">
                BeatGuess
              </Text>
            </HStack>
          </StyledLink>

          {userMenu ? userMenu : null}
        </Flex>
      </Container>
    </Box>
  );
}
