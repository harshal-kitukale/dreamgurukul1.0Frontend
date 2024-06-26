import { React, ReactNode, useEffect, useRef } from "react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Flex,
  Link,
  Text,
  useDisclosure,
  // useColorMode,
} from "@chakra-ui/react";

export default function DrawerNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { colorMode, toggleColorMode } = useColorMode();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex w="70%" justifyContent={"flex-start"}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}

              <Link
                id="resume-link-1"
                href="Harshal_Kitukale_Resume.pdf"
                download
                target="_blank"
              >
                <Button
                  id="resume-button-1"
                  class="nav-link resume"
                  colorScheme="teal"
                  size="md"
                  ml="20px"
                  variant="solid"
                >
                  <Flex ml="10px" alignItems={"center"}>
                    <Button colorScheme="teal">
                      <Text mr={"4px"}>Resume</Text> <BiDownload />
                    </Button>
                  </Flex>
                </Button>
              </Link>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"center"}
            >
              <Flex
                w="100%"
               
                class="nav-link home"
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "teal.300",
                  color: "white",
                }}
              >
                Home
              </Flex>

              <Flex
                w="100%"
                class="nav-link about"
                colorScheme="gray"
              
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "teal.300",
                  color: "white",
                }}
              >
                About
              </Flex>

              <Flex
                w="100%"
                class="nav-link skills"
              
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "teal.300",
                  color: "white",
                }}
              >
                Skills
              </Flex>

              <Flex
                w="100%"
                textAlign={"left"}
                class="nav-link projects"
               
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "teal.300",
                  color: "white",
                }}
              >
                Projects
              </Flex>

              <Flex
                w="100%"
              
                class="nav-link contact"
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "teal.300",
                  color: "white",
                }}
              >
                Contact
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}