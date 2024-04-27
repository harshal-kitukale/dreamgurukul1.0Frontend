import React, { useEffect } from "react";
import { Flex, Box, Text, Grid, GridItem, Image, Skeleton, Spinner } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/actions";

const Products = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, products } = useSelector((store) => store.productReducer);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner thickness="4px" speed="0.6s" emptyColor="gray.200" color="blue.500" size="xl" />
      ) : (
        //     <Box p={[2, 3, 3, 4]} pl={["20px", "10px", "20px", "0px"]} m={"auto"} w={"100%"}>
        //       <Flex gap={[3, 4, 4, 2]} flexWrap="wrap" m={["0px", "5px", "10px"]}>
        //         {Array.from({ length: 10 }).map(() => {
        //           return <ProductCard />; // Adjust the return value as needed
        //         })}
        //       </Flex>
        // </Box>
        <Flex>
          <Box>
            <Sidebar />
          </Box>
          <Box p={[2, 3, 3, 4]} pl={["20px", "10px", "20px", "0px"]} m={"auto"} w={"100%"}>
            <Flex gap={[3, 4, 4, 2]} flexWrap="wrap" m={["0px", "5px", "10px"]}>
              {products?.map((el,index) => {
                return (
                    <ProductCard key={index} product={el} />
                );
              })}
            </Flex>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Products;
