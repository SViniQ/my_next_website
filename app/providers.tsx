'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Tema customizado seguindo as diretrizes do Figma
const theme = extendTheme({
  fonts: {
    heading: `'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
    body: `'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
  },
  colors: {
    brand: {
      blue: '#1E40FF',
      purple: '#8B5CF6',
    },
    light: {
      bg: '#F7F7F8',
      surface: '#FFFFFF',
      text: '#111111',
      muted: '#E5E5E7',
      textSecondary: '#374151',
    },
    dark: {
      bg: '#0C0C0D',
      surface: '#121214',
      text: '#F5F5F7',
      muted: '#2C2C2E',
      textSecondary: '#D1D5DB',
    }
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0C0C0D' : '#F7F7F8',
        color: props.colorMode === 'dark' ? '#F5F5F7' : '#111111',
        transition: 'background-color 0.2s, color 0.2s',
      },
    }),
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}