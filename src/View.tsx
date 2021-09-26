import { chakra, StyleProps } from "@chakra-ui/system";
import { css } from "@emotion/css";
import { createContext } from "react";
import { WithChildren } from "./react";
import { ContainerProps } from "./props";
import { Root } from "./hierarchy";

const SubviewValidator = createContext(false);

export interface ViewProps extends WithChildren, ContainerProps {
    inline?: boolean;
}

const viewSymbol = Symbol("View");

export const View = ({
    inline = false,
    children,
    ...styles
}: ViewProps): JSX.Element => (
    <Root id={viewSymbol}>
        <chakra.div
            className={css`
                display: ${inline ? "inline-block" : "block"};
                overflow: hidden;
            `}
            {...styles}
        >
            <SubviewValidator.Provider value={true}>
                {children}
            </SubviewValidator.Provider>
        </chakra.div>
    </Root>
);

const subviewSymbol = Symbol("Subview");

export const Subview = ({
    children,
    ...props
}: StyleProps & WithChildren): JSX.Element => {
    return (
        <Root id={subviewSymbol} parent={viewSymbol}>
            <chakra.div {...props} />
        </Root>
    );
};
