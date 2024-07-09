import React from "react";
import {
  Button,
  Flex,
  Text,
  Stack,
  Avatar,
  Tooltip,
  useColorMode,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CiLogout } from "react-icons/ci";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { logout } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/cartSelector";
import { IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  username: string;
  avatarImg: string;
}

const Navbar: React.FC<NavbarProps> = ({ username, avatarImg }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useSelector(selectCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      position="sticky"
      top="0"
      zIndex="1000"
      padding="30px 50px"
      alignItems="center"
      justifyContent="space-between"
      className="nav-wrapper"
      backgroundColor={colorMode === "light" ? "white" : "gray.800"}
    >
      <Heading className="nav-heading">MULTI SHOP</Heading>

      <Flex
        display={{ base: "none", lg: "flex" }}
        alignItems="center"
        justifyContent="center"
        gap="20px"
        className="nav-links"
      >
        <Button onClick={() => navigate("/")} fontSize="20px" variant="ghost">
          Home
        </Button>
        <Button fontSize="20px" variant="ghost">
          Shop
        </Button>
        <Button fontSize="20px" variant="ghost">
          About
        </Button>
        <Button fontSize="20px" variant="ghost">
          Contact Us
        </Button>
      </Flex>

      <Flex alignItems="center" justifyContent="center" gap="20px">
        <Tooltip label="Logout" aria-label="Logout tooltip">
          <Button
            className="logout-btn"
            variant="ghost"
            onClick={() => dispatch(logout())}
            leftIcon={<CiLogout fontSize="30px" />}
          />
        </Tooltip>
        <Tooltip
          label="Change Color Mode"
          aria-label="Change Color Mode tooltip"
        >
          <Button
            className="change-colormode-btn"
            onClick={toggleColorMode}
            height="50px"
            variant="ghost"
          >
            {colorMode === "light" ? (
              <MdOutlineDarkMode fontSize="30px" />
            ) : (
              <MdOutlineLightMode fontSize="30px" />
            )}
          </Button>
        </Tooltip>
        <Avatar src={avatarImg} name={username} />
        <Tooltip label="Cart" aria-label="Cart tooltip">
          <Button
            position="relative"
            onClick={() => navigate("/cart")}
            variant="ghost"
            leftIcon={<FaShoppingCart fontSize="30px" />}
          >
            <Text
              position="absolute"
              right="5px"
              top="-10px"
              padding="5px 10px"
              borderRadius="50%"
              backgroundColor="red"
              color="white"
            >
              {cart.totalAmount}
            </Text>
          </Button>
        </Tooltip>

        <Flex display={{ base: "flex", lg: "none" }}>
          <Button
            variant="ghost"
            fontSize="40px"
            leftIcon={<IoIosMenu />}
            onClick={onOpen}
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody
                className="drawer"
                alignItems="center"
                justifyContent="center"
              >
                <Stack
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  rowGap="50px"
                  className="nav-links"
                >
                  <Button fontSize="25px" variant="ghost" onClick={onClose}>
                    Home
                  </Button>
                  <Button fontSize="25px" variant="ghost" onClick={onClose}>
                    Shop
                  </Button>
                  <Button fontSize="25px" variant="ghost" onClick={onClose}>
                    About
                  </Button>
                  <Button fontSize="25px" variant="ghost" onClick={onClose}>
                    Contact Us
                  </Button>
                </Stack>
              </DrawerBody>
              <DrawerFooter display="flex" justifyContent="space-between">
                <Button
                  variant="ghost"
                  leftIcon={<CiLogout fontSize="30px" />}
                  onClick={() => {
                    dispatch(logout());
                    onClose();
                  }}
                ></Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    toggleColorMode();
                    onClose();
                  }}
                >
                  {colorMode === "light" ? (
                    <MdOutlineDarkMode fontSize="30px" />
                  ) : (
                    <MdOutlineLightMode fontSize="30px" />
                  )}
                </Button>
                <Button
                  className="close-drawer-btn"
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                >
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
