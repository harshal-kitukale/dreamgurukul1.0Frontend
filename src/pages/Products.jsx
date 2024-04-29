import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Grid, GridItem, Image, Skeleton, Spinner } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/actions";
import { useLocation, useSearchParams } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { isLoading, products } = useSelector((store) => store.productReducer);
  // const [sortByPrice] = useState(searchParams.get("sortByPrice") || "");
  // const [filterByName] = useState(searchParams.getAll("filterByName")||[]);
  const location = useLocation();

  let paramObj = {
    sortByPrice: searchParams.get("sortByPrice") || "",
    filterByName: searchParams.getAll("filterByName") || [],
  };
  console.log(paramObj);

  useEffect(() => {
    dispatch(getData(paramObj));
  }, [location.search]);
  return (
    <>
      {isLoading ? (
        <Flex
          alignItems="center"
          justifyContent="center"
          minHeight="100vh" // Set minimum height to ensure the spinner covers the entire viewport
        >
          <Spinner thickness="4px" speed="0.6s" emptyColor="gray.200" color="blue.500" size="xl" />
        </Flex>
      ) : (
        <Flex>
          <Box>
            <Sidebar />
          </Box>
          <Box p={[2, 3, 3, 4]} pl={["20px", "10px", "20px", "0px"]} m={"auto"} w={"100%"}>
            <Flex gap={[3, 4, 4, 2]} flexWrap="wrap" m={["0px", "5px", "10px"]}>
              {products?.map((el, index) => {
                return <ProductCard key={index} product={el} />;
              })}
            </Flex>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Products;
