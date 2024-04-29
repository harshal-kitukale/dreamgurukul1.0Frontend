import { React, ReactNode, useEffect, useRef } from "react";
import { Box, Flex, Button, Text, Image, Icon, Avatar, Wrap, WrapItem } from "@chakra-ui/react";

import DrawerNavbar from "./DrawerNavbar";
import { NavbarButtons } from "../Custom_Components/NavbarButtons";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      {/* there is a navbar */}
      <Box
        id="nav-menu"
        as="header"
        bg="black"
        pl={4}
        position="fixed"
        w="100%"
        zIndex={"1000"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        top={"0px"}
        color="white"
      >
        <Flex
          border={"1px solid violet"}
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={0}
          m="auto"
          width={"100%"}
        >
          {/* <Flex
            
            alignItems={"center"}
            className="fontClass"
            w={{ base: "25%" }}
            fontSize={"42px"}
          > */}
          <Image
            w="70px"
            src="data:image/jpeg;base64,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"
          />
          {/* <Image w="70px" src="logo.png" /> */}
          {/* <Text ml="10px">Harshal</Text> */}
          {/* </Flex> */}

          <Flex
            border={"1px solid yellow"}
            w={{ base: "20px", lg: "50%", xl: "50%" }}
            m={"auto"}
            display={{ base: "none", lg: "block" }}
            alignItems={"flex-start"}
            justifyContent="center"
          >
            <NavbarButtons />
          </Flex>
          {/* <Button className="nav-link resume" colorScheme="teal" size="md"> */}
          
          <Flex  width={{ base: "30%",sm: '30%', lg: "10%" }} h="100%" alignItems={"center"} justifyContent={"space-between"} mr={"10px"}>
          <Box position={"relative"}>
            <Icon as={FaShoppingCart} boxSize={7} />
            <Box
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                width: "17px",
                height: "17px",
                alignContent: "center",
                justifyContent: "center",
                position: "absolute",
                top: "0px",
                left: "13px",
                fontWeight: "500",
                fontSize: "13px",
              }}
            >
              50
            </Box>
          </Box>
          <Box display={{ base: "none", lg: "block" }}>
              <Avatar name="Oshigaki Kisame" size="sm" />
          </Box>

          <Box display={{ base: "block", lg: "none" }} >
            <Flex
              w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"center"}
            >
              <DrawerNavbar />
            </Flex>
          </Box>
          </Flex>

        </Flex>
      </Box>
    </>
  );
}
