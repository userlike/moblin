import { Box, ChakraProvider } from '@chakra-ui/react';

import { Block } from '../src/Block';
import { List, ListProps } from '../src/List';

export default {
  component: List,
  args: {
    direction: 'column',
  },
};

const render = (props: ListProps) => (
  <List color="white" {...props}>
    <Box bg="red.500">Test 1</Box>
    <Block bg="blue.500">Test 2</Block>
    <Block bg="yellow.500">Test 3</Block>
  </List>
);

export const Default = {
  render,
};

export const Horizontal = {
  render,
  args: {
    direction: 'row',
  },
};

export const WithGap = {
  render,
  args: {
    gap: 2,
  },
};

export const PureText = {
  render,
};
