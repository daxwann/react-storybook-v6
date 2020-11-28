import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { withConsole } from '@storybook/addon-console';
import { withA11y} from '@storybook/addon-a11y';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

addDecorator((story) => (
  <ChakraProvider theme={theme}>
    <Center>
      {story()}
    </Center>
  </ChakraProvider>
  ));

addDecorator((storyFn, context) => withConsole()(storyFn)(context))