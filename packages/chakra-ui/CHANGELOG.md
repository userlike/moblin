# Change Log - @moblin/chakra-ui

This log was last generated on Wed, 06 Oct 2021 13:00:39 GMT and should not be manually modified.

## 0.5.0

Wed, 06 Oct 2021 13:00:39 GMT

### Minor changes

- add min/max width/height props to ContainerProps because they are as safe as width/height are

## 0.4.1

Wed, 06 Oct 2021 09:45:00 GMT

### Patches

- fix the case when nullish children are ppassed to List component. nullish children are correctly filtered out and they don't render empty FlexItems anymore, causing wrong gaps.

## 0.4.0

Wed, 06 Oct 2021 09:00:36 GMT

### Minor changes

- add grow, shrink, basis props to List which are directly passed to auto inserted FlexItem elements

## 0.3.0

Wed, 06 Oct 2021 08:39:35 GMT

### Minor changes

- add color, positioning and typography props to ContainerProps
- add List component as a shorthand alternative to Flex
- add Box component which is an alias to a div with overflow hidden, so that users can use flow layout when they want or need

### Patches

- remove leftover console.log

## 0.2.2

Tue, 05 Oct 2021 21:52:45 GMT

### Patches

- fix prepare hook in package.json so that package is built correctly just before publish

## 0.2.1

Tue, 05 Oct 2021 21:48:52 GMT

### Patches

- fix typings path in package.json

## 0.2.0

Tue, 05 Oct 2021 21:36:21 GMT

### Minor changes

- replace tsdx with own tooling, because tsdx seems to be poorly maintained and has become a source of problems

### Patches

- replace yarn with pnpm with better compatibility with rush and for better performance
- fix gap not respecting space tokens

## 0.1.1

Mon, 04 Oct 2021 16:01:41 GMT

### Patches

- add @chakra-ui/system to peer dependencies
