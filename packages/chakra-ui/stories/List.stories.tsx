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
    <Block bg="red.500">Test 1</Block>
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

export const FlexItemProps = {
  render,
  args: {
    grow: 0,
    shrink: 0,
    basis: '3rem',
  },
};

export const EmptyChildren = {
  render: (props: ListProps) => (
    <List bg="blue.300" color="white" {...props}>
      {null}
      <Block bg="red.500">Test 1</Block>
      {null}
      <Block bg="blue.500">Test 2</Block>
      {null}
      <Block bg="yellow.500">Test 3</Block>
      {null}
    </List>
  ),
  args: {
    gap: '1rem',
  },
};
