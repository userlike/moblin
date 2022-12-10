import isChromatic from "chromatic/isChromatic";
import { css, html, TemplateResult } from "lit";

interface DemoOptions {
  title?: string;
  animate?: boolean;
}

const resize = css`
  @keyframes resize {
  0% {
    width: 12rem;
    height: 12rem;
  }
  50% {
    width: 24rem;
    height: 24rem;
  }
  100% {
    width: 12rem;
    height: 12rem;
  }
`;

export const demo =
  ({ title = "Container", animate = !isChromatic() }: DemoOptions = {}) =>
  (story) =>
    html`
      <style>
        .demo-container {
          position: relative;
          padding: 2rem;
          background: #68d391;
          color: black;
        }
        .animate > * {
          width: 12rem;
          height: 12rem;
          will-change: width, height;
          animation-name: ${animate ? "resize" : "none"};
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }

        .demo-title {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
        }

        ${resize};
      </style>

      <div class="demo-container">
        <div class="animate">${story()}</div>
        <div class="demo-title">${title}</div>
      </div>
    `;
