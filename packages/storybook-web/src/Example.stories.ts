import "@moblin/web";

import { html } from "lit";

export default {};

export const Example = () => html`
  <style>
    x-flex {
      background: red;
      padding: 10px;
    }

    x-flex-item {
      background: blue;
      color: white;
    }

    .c2-parent {
      background: black;
      padding: 10px;
    }

    .c2 {
      background: green;
    }
  </style>

  <x-flex direction="row" align-items="flex-end">
    <x-flex-item>
      <x-flex direction="column">
        <x-flex-item> C1.1 </x-flex-item>
        <x-flex-item> C1.2 </x-flex-item>
      </x-flex>
    </x-flex-item>
    <x-flex-item>
      <div class="c2-parent">
        <div class="c2">C2</div>
      </div>
    </x-flex-item>
  </x-flex>
`;
