import { html } from "lit";

import "./Flex";
import "./FlexItem";

export default {
  title: "Flex",
};

export const Primary = () => html`
  <x-flex direction="column" align-items="flex-end">
    <x-flex-item>Hello</x-flex-item>
    <x-flex-item>Sup?</x-flex-item>
  </x-flex>
`;
