import { expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { Block } from './Block';
import { List } from './List';

it('works with blocks as children', () => {
  render(
    <List direction="column">
      <Block>Foo</Block>
      <Block>Bar</Block>
    </List>
  );

  expect(screen.queryByText('Foo')).toBeDefined();
  expect(screen.queryByText('Bar')).toBeDefined();
});

it('works with pure text as children', () => {
  render(<List direction="column">Foo Bar</List>);

  expect(screen.queryByText('Foo')).toBeDefined();
  expect(screen.queryByText('Bar')).toBeDefined();
});
