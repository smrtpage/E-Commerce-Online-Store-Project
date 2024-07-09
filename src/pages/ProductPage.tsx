import React, { useEffect, useState } from "react";
import {
  Stack,
  Text,
  Spinner,
  Image,
  Box,
  Button,
  Heading,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductPage: React.FC = () => {
  const toast = useToast();

  const dispatch = useDispatch();
  const [productData, setProductData] = useState<any>(null);
  const { productId } = useParams<{ productId: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => setProductData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [productId]);

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Text color="red.500">{error}</Text>
      </Flex>
    );
  }

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      padding="20px"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box flex="1" maxWidth="50%" display="flex" justifyContent="center">
        <Image
          src={productData?.image}
          alt={productData?.title}
          maxWidth="100%"
          maxHeight="700px"
          objectFit="contain"
        />
      </Box>
      <Stack flex="1" spacing="20px" textAlign={{ base: "center", md: "left" }}>
        <Heading as="h1" size="xl">
          {productData?.title}
        </Heading>
        <Text fontSize="3xl" fontWeight="bold" color="blue.600">
          ${productData?.price}
        </Text>
        <Text my="4" fontSize="xl" h="fit-content">
          {productData?.description}
        </Text>
        <Flex gap="20px" alignItems="center" justifyContent="left">
          <Button
            onClick={() => {
              dispatch(
                addToCart({
                  id: productData.id,
                  name: productData.title,
                  price: productData.price,
                  image: productData.image,
                })
              ),
                toast({
                  isClosable: true,
                  title: "Successfully Added To Cart!",
                  status: "success",
                });
            }}
            leftIcon={<FaShoppingCart />}
            maxW="250px"
            colorScheme="blue"
            size="lg"
            my="4"
          >
            Add to Cart
          </Button>
          <Button
            leftIcon={<CiHeart fontSize="30px" />}
            maxW="250px"
            variant="ghost"
            colorScheme="blue"
            size="lg"
            my="4"
          >
            Add To Wish List
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default ProductPage;
