import {
  Stack,
  Divider,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseItemAmount,
  decreaseItemAmount,
  removeItemFromCart,
  clearCart,
} from "../redux/cartSlice";
import React from "react";
import { selectCart } from "../redux/cartSelector";
import telegramIcon3D from "../assets/Telgram3dIcon.png";

const Cart: React.FC = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItemFromCart({ id: itemId }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrease = (itemId: number) => {
    dispatch(increaseItemAmount({ id: itemId }));
  };

  const handleDecrease = (itemId: number) => {
    dispatch(decreaseItemAmount({ id: itemId }));
  };

  return (
    <Stack
      display="flex"
      w="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        padding="50px"
        borderRadius="20px"
        border="1px solid #ccc"
        className="CartWrapper"
        maxW="1400px"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="20px"
          maxW="1100px"
          className="ShoppingCart"
        >
          <Flex
            alignItems="center"
            w="1100px"
            p="20px 0"
            justifyContent="space-between"
            className="ShoppingCartTop"
          >
            <Heading>Shopping Cart</Heading>
            <Flex alignItems="center" justifyContent="center" gap="20px">
              {cart.cart.length === 0 ? (
                <Button
                  _hover={{ backgroundColor: "#d94848" }}
                  disabled
                  cursor="not-allowed"
                  backgroundColor="#d94848"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </Button>
              ) : (
                <Button
                  _hover={{ backgroundColor: "red" }}
                  backgroundColor="red"
                  color="#fff"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </Button>
              )}

              <Text fontSize="30px" fontWeight="bold">
                {cart.totalAmount} Items
              </Text>
            </Flex>
          </Flex>
          <Divider />
          <Stack
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            rowGap="40px"
            p="20px 0"
            className="ProductsDetails"
          >
            <Flex alignItems="center" w="1100px" justifyContent="space-between">
              <Text width="200px" color="#ccc" fontSize="20px">
                PRODUCT
              </Text>
              <Text
                paddingLeft="45px"
                width="200px"
                color="#ccc"
                fontSize="20px"
              >
                QUANTITY
              </Text>
              <Text width="200px" color="#ccc" fontSize="20px">
                PRICE
              </Text>
              <Text
                paddingLeft="35px"
                width="200px"
                color="#ccc"
                fontSize="20px"
              >
                REMOVE ITEM
              </Text>
            </Flex>
            {cart.cart.length === 0 ? (
              <Heading color="#ccc">YOUR CART IS EMPTY...</Heading>
            ) : (
              cart.cart.map((item, index) => (
                <Flex
                  key={index}
                  alignItems="center"
                  rowGap="50px"
                  w="1100px"
                  justifyContent="space-between"
                  className="ProductDetails"
                >
                  <Flex
                    w="200px"
                    className="Product"
                    gap="20px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={item.image}
                      backgroundColor="blue"
                      width="100px"
                      height="100px"
                    />
                    <Flex
                      flexDirection="column"
                      justifyContent="center"
                      rowGap="10px"
                      alignItems="flex-start"
                    >
                      <Text
                        fontSize="20px"
                        fontWeight="600"
                        className="ProductName"
                      >
                        {item.name}
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    w="200px"
                    gap="20px"
                    justifyContent="center"
                    alignItems="center"
                    className="ProductQuantity"
                  >
                    <Button
                      onClick={() => handleDecrease(item.id)}
                      marginBottom="10px"
                      fontSize="40px"
                      _hover={{ background: "none" }}
                      variant="ghost"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="blue"
                      className="ReduceBtn"
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      width="30px"
                      padding="10px"
                      outline="none"
                      value={item.amount}
                      color="grey"
                      readOnly
                    />
                    <Button
                      onClick={() => handleIncrease(item.id)}
                      marginBottom="10px"
                      fontSize="40px"
                      _hover={{ background: "none" }}
                      variant="ghost"
                      color="blue"
                      className="AddBtn"
                    >
                      +
                    </Button>
                  </Flex>

                  <Stack w="200px" className="PriceSection">
                    <Text fontSize="20px" fontWeight="600">
                      ${item.totalPrice.toFixed(2)}
                    </Text>
                  </Stack>

                  <Stack
                    w="200px"
                    className="RemoveSection"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Button
                      onClick={() => handleRemoveItem(item.id)}
                      color="#fff"
                      _hover="none"
                      backgroundColor="red"
                      leftIcon={<MdDelete />}
                      className="remove-btn"
                      h="40px"
                    >
                      Remove Item
                    </Button>
                  </Stack>
                </Flex>
              ))
            )}
          </Stack>
        </Stack>
        <Flex
          w="100%"
          padding="20px"
          justifyContent="space-between"
          alignItems="center"
          className="OrderDetails"
          borderRadius="20px"
          backgroundColor="#E7E7E7"
          border="none"
        >
          <Stack
            direction="row"
            w="auto"
            display="flex"
            gap="20px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              display="block"
              src={telegramIcon3D}
              alt="Telegram Icon"
              width="100px"
              height="100px"
            />
            <Text fontSize="20px" w="400px" color="#292929">
              If You Want To Order Goods, Please Join Our Buying Bot In
              Telegram: Name... Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </Text>
          </Stack>

          <Stack
            w="50%"
            display="flex"
            flexDirection="column"
            rowGap="20px"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="22px" fontWeight="600">
              TOTAL: ${cart.totalPrice.toFixed(2)}
            </Text>
            <Button
              // onClick={handleCheckout}
              width="150px"
              _hover={{ backgroundColor: "#0096FF", transform: "scale(1.1)" }}
              backgroundColor="#0096FF"
              color="#fff"
            >
              CHECKOUT
            </Button>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Cart;
