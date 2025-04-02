"use client";

import { useState } from "react";
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
import { LogOut, UserIcon, Settings, Music } from "lucide-react";

export function UserHeader() {
  const [user] = useState({
    name: "Spotify User",
    image: "/placeholder.svg?height=40&width=40",
    // In a real app, this would come from your auth context
  });

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

          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rounded="full"
              p={0}
              minW="40px"
              h="40px"
            >
              <Avatar
                size="sm"
                name={user.name}
                src={user.image}
                bg="gray.700"
              />
            </MenuButton>
            <MenuList bg="gray.800" borderColor="gray.700">
              <Box px={3} py={2}>
                <Text fontWeight="medium" fontSize="sm">
                  {user.name}
                </Text>
                <Text fontSize="xs" color="gray.400">
                  Spotify Connected
                </Text>
              </Box>
              <MenuDivider borderColor="gray.700" />
              <MenuItem
                icon={<Icon as={UserIcon} boxSize={4} />}
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
              >
                Profile
              </MenuItem>
              <MenuItem
                icon={<Icon as={Settings} boxSize={4} />}
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
              >
                Settings
              </MenuItem>
              <MenuDivider borderColor="gray.700" />
              <MenuItem
                icon={<Icon as={LogOut} boxSize={4} />}
                onClick={handleLogout}
                color="red.400"
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
              >
                Log out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </Box>
  );
}
