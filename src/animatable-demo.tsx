import * as S from "./storybook";
import isChromatic from "chromatic/isChromatic";
import styled from "@emotion/styled";

interface DemoOptions {
  title?: string;
  animate?: boolean;
}

const DemoContainer = styled.div<DemoOptions>`
  position: relative;
  padding: 32px;
  background-color: #0f0;

  /* stylelint-disable selector-max-type */
  & > div:first-of-type {
    width: 200px;
    height: 200px;

    will-change: width, height;

    animation-name: ${({ animate }) => (animate ? "resize" : "none")};
    animation-duration: 2s;
    animation-iteration-count: infinite;

    @keyframes resize {
      0% {
        width: 200px;
        height: 200px;
      }
      50% {
        width: 400px;
        height: 400px;
      }
      100% {
        width: 200px;
        height: 200px;
      }
    }
  }
`;

const ContainerTitle = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const demo =
  ({
    title = "Container",
    animate = !isChromatic(),
  }: DemoOptions = {}): S.Decorator =>
  (Story) =>
    (
      <DemoContainer animate={animate}>
        <Story />
        <ContainerTitle>{title}</ContainerTitle>
      </DemoContainer>
    );
