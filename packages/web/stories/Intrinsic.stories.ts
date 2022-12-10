import { html } from "lit";
import "../src/Box";
import "../src/Flex";
import "../src/FlexItem";
import "../src/Test";

export default {};

export const Foo = () => html`
  <x-flex direction="row" gap="2px">
    <x-flex-item>
      <x-box>Hello</x-box>
    </x-flex-item>
    <x-flex-item>
      <x-box>World</x-box>
    </x-flex-item>
  </x-flex>
`;

export const Bar = () => html`
  <x-test-2>Hello world</x-test-2>
`;
