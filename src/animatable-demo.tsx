import * as S from "./storybook";
import isChromatic from "chromatic/isChromatic";

import { css } from "@emotion/css";

interface DemoOptions {
    title?: string;
    animate?: boolean;
}

export const demo =
    ({
        title = "Container",
        animate = !isChromatic(),
    }: DemoOptions = {}): S.Decorator =>
    (Story) =>
        (
            <div
                className={css`
                    position: relative;
                    padding: 32px;
                    background-color: #0f0;

                    /* stylelint-disable selector-max-type */
                    & > div:first-of-type {
                        width: 200px;
                        height: 200px;

                        animation-name: ${animate ? "resize" : "none"};
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
                `}
            >
                <Story />
                <div
                    className={css`
                        position: absolute;
                        top: 8px;
                        left: 8px;
                    `}
                >
                    {title}
                </div>
            </div>
        );
