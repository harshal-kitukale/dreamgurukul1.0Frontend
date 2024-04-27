import { Text } from "@chakra-ui/react";

export const PriceText = ({ children, ...rest }) => (
    <Text fontSize="sm" display="inline-block" mr={"10px"} {...rest}>
        {children}
    </Text>
  );

