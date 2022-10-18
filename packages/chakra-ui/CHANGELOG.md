# Change Log - @moblin/chakra-ui

This log was last generated on Tue, 18 Oct 2022 10:11:25 GMT and should not be manually modified.

## 2.0.0

Tue, 18 Oct 2022 10:11:25 GMT

### Breaking changes

- replace negative margin based flex gap with native flex gap

## 1.1.0

Mon, 17 Oct 2022 13:58:54 GMT

### Minor changes

- add scroll related css rules to ContainerProps

## 1.0.0

Wed, 29 Jun 2022 11:02:48 GMT

### Breaking changes

- make minimum react version v18 and minimum chakra-ui version v2

## 0.6.0

Thu, 24 Feb 2022 13:23:30 GMT

### Minor changes

- allow unsafe styling props, such as margins. update all deps.
- add overflow and isolation props
- implement an alternative layout system based on overflow: visible
- make flex items shrink by default
- allow all effect props in container props because they are allowed with overflow:visible based layout system
- add display names to components in dev environment
- add moblin theme slice and themeable overflow type property for Scrollable

### Patches

- fix gap token values producing invalid css
- fix BoxProps types referring to a missing file

## 0.5.2

Wed, 06 Oct 2021 15:13:24 GMT

### Patches

- use NODE_ENV=production during build for a proper production build

## 0.5.1

Wed, 06 Oct 2021 14:59:52 GMT

### Patches

- fix kebab-case warnings coming from emotion in Scrollable, caused by wrong usage of margin css prop names

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
