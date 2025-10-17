"use client"

import { ChakraProvider } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "'Poppins', sans-serif" },
        heading: { value: "'Poppins', sans-serif" },
      },
      colors: {
        primary: {
          value: "#194de7"
        }
      },
    },
  },
});
const system = createSystem(defaultConfig, config)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
