import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Text,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortByPrice, setSortByPrice] = useState(searchParams.get("sortBy") || "");
  const [filtersByName, setFiltersByName] = useState(searchParams.get("filtersByName")||[]);
  console.log((filtersByName));
  const productsNames=[
    "Iola Mays",
    "Amity Alexander",
    "Gemma Young",
    "Brianna Hobbs"
  ]
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleSortByPriceChange = (value) => {
    setSortByPrice(value);
    setSearchParams({ sortBy: value });
  };

  const handleFiltersByNameChange = (e) => {
      //  console.log(e.target);
    if (e.target.checked) {
      setFiltersByName([...filtersByName, e.target.value]);
    } else {
      setFiltersByName(filtersByName.filter((item) => item !== e.target.value));
    }
    setSearchParams(filtersByName)
  };

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box position="sticky" top="0" left="0" bottom="0" zIndex={10} boxShadow="lg">
      {/* Sidebar for normal view */}
      {!isMobile && (
        <Box bg="gray.100" w="200px" h="100vh" pt={100} borderRight="1px solid #E2E8F0">
          <VStack spacing={4} p={4}>
            <Text fontWeight="bold">Sort by Price</Text>
            <RadioGroup onChange={handleSortByPriceChange} value={sortByPrice}>
              <VStack>
                <Radio value="lowToHigh">Low to High</Radio>
                <Radio value="highToLow">High to Low</Radio>
              </VStack>
            </RadioGroup>
            <Text fontWeight="bold">Filters by Name</Text>
            <CheckboxGroup  value={filtersByName}>
              <VStack>
                {productsNames.map((name,i)=>(
                  <Checkbox  key={i} value={name} checked={filtersByName.includes(name) ? true : false } onChange={handleFiltersByNameChange}>{name}</Checkbox>
                ))}
              </VStack>
            </CheckboxGroup>
          </VStack>
        </Box>
      )}

      {/* Hamburger Icon for mobile view */}
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open Sidebar"
        onClick={handleToggleSidebar}
        display={{ base: "block", md: "none" }}
        position="fixed"
        top="0"
        left="0"
        zIndex={15}
      />

      {/* Sidebar as Drawer for mobile view */}
      <Drawer isOpen={isOpen} placement="left" onClose={handleToggleSidebar} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} p={4}>
                <Text fontWeight="bold">Sort by Price</Text>
                <RadioGroup onChange={handleSortByPriceChange} value={sortByPrice}>
                  <VStack>
                    <Radio value="lowToHigh">Low to High</Radio>
                    <Radio value="highToLow">High to Low</Radio>
                  </VStack>
                </RadioGroup>
                <Text fontWeight="bold">Filters by Name</Text>
                <CheckboxGroup onChange={handleFiltersByNameChange} value={filtersByName}>
                  <VStack>
                    <Checkbox value="Iola Mays">Iola Mays</Checkbox>
                    <Checkbox value="Amity Alexander">Amity Alexander</Checkbox>
                    <Checkbox value="Gemma Young">Gemma Young</Checkbox>
                    <Checkbox value="Brianna Hobbs">Brianna Hobbs</Checkbox>
                  </VStack>
                </CheckboxGroup>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
