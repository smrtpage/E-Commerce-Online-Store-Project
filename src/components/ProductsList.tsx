import React from "react";
import { Stack, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { Product } from "../types";
import ProductItem from "./ProductItem";

interface ProductsListProps {
  products: Product[];
  length: number;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, length }) => {
  return (
    <Stack
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      padding="40px 50px"
    >
      <Heading>Featured Products</Heading>
      <Wrap marginTop="50px" spacing="50px" justify="center">
        {products.slice(0, length).map((product) => (
          <WrapItem key={product.id}>
            <ProductItem product={product} />
          </WrapItem>
        ))}
      </Wrap>
    </Stack>
  );
};

export default ProductsList;
