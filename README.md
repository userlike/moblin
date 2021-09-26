## Separation of concerns

1. Encapsulation
2. Reusability

Non-fluid UIs can be encapsulated but they may not be reusable.
The debate of width/height causes a potential non-reusability.

## Plan

-   Figure out styles that are allowed outside escape hatch. (`ContainerProps`?)
-   Export each set of safe props.
-   Implement an escape hatch: `View`. Inside, can use a component called `Subview` that has all possible css properties.
-   Implement FlexBox

## Open questions:

-   Are we gonna allow position: fixed?
    -   position: fixed is only dangerous with z-index.
    -   Which elements can contain position: fixed?
    -   It needs to be something that is a stacking context.
    -   Introduce `Body` to act as the initial stacking context.
-   What about a `Box`?
-   How are we gonna handle z-index?
    -   z-index is relative to all the elements that are inside a stacking context.
    -   Make it explicit to create stacking contexts.
        -   With layout managers: They create stacking context.
        -   Custom css props: opacity, mix-blend-mode, transform, filter, perspective, clip-path, mask/mask-image/mask-border, **`isolation`**, `-webkit-overflow-scrolling`, `will-change`, `contain`.
        -   Use a hook for zIndex, via a Provider/Context. Require ordering of children at the provider element.

## Allowed styles

Is there a separation of those can be used on and those that can be used by?

-   There is a common set of props that can be used on all components:
    -   Positioning, visibility (can be done with a wrapper too)
    -   Should we omit positioning from common props but allow them on a `Box` component?
-   Who can use `width` and `height` props? Anybody. What if content doesn't fit? That's user's responsibility if component can't properly handle overflow.
-   Implement auto overflow warnings in dev mode and errors in chromatic tests. How? After every render, check if there's overflow.

-   How do I systematically separate styles?
-   I cannot decide what styles should be allowed for `View`.
-   I cannot decide whether to allow `height/width` props or not. Because e.g. `const Component = () => <View height="100px" />` breaks my rules. How do I create something that has different rules for component roots?
-   Maybe like Cocoa? Component can define width/height but parent can override it?
    -   For example, a flex container can reset all of its children's width/height to `auto`?
    -   Who the fuck is the source of truth for `width/height`?
-   Let's think about use cases and try to cover them all.

```jsx
/** Does this width/height break component encapsulation? No it doesn't.
 * It seems some layout concerns are different than component encapsulation.
 * What is my concern with width/height at component root?
 * It changes how layout manager components lay the component out.
 * It __usually__ makes component less reusable.
 * Is there a way to use width/height as "preferred size"?
 */
const Component = () => (
    <Flex width={100} height={100}>
        <FlexItem />
        <StaticItem>
            {/* Here, width and height are needed. */}
            <Button width={32} height={32} borderRadius={32}>
                <IconX />
            </Button>
        </StaticItem>
        <FlexItem />
    </Flex>
);

const App = () => (
    <Box>
        <Component />
    </Box>
);
```
