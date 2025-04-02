import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Icon,
} from "@chakra-ui/react";
import { LogOut, UserIcon, Settings, Music } from "lucide-react";

export default function UserMenu({
  userName,
  userPicture,
  handleLogout,
}: {
  userName: string;
  userPicture: string;
  handleLogout: () => void;
}) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        rounded="full"
        p={0}
        minW="40px"
        h="40px"
      >
        <Avatar size="sm" name={userName} src={userPicture} bg="gray.700" />
      </MenuButton>
      <MenuList bg="gray.800" borderColor="gray.700">
        <Box px={3} py={2}>
          <Text fontWeight="medium" fontSize="sm">
            {userName}
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
  );
}
