import * as React from "react";
import { ChakraProvider } from "@chakra-v2/react";

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
];
