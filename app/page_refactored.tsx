'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { useThemeColors } from './hooks/useThemeColors';

/**
 * Portfolio Principal - Aplicação Next.js 15 com Chakra UI
 * 
 * Estrutura:
 * - Header com navegação responsiva e theme toggle
 * - Hero section com apresentação e CTA
 * - Skills section categorizada por tecnologias
 * - Layout responsivo e otimizado para performance
 * 
 * @returns Componente principal do portfolio
 */
export default function Portfolio() {
  const { bgColor, textColor } = useThemeColors();

  return (
    <Box 
      bg={bgColor} 
      color={textColor} 
      minH="100vh" 
      transition="background-color 0.2s ease, color 0.2s ease"
    >
      <Header />
      
      <main role="main">
        <HeroSection />
        <SkillsSection />
      </main>

      {/* Footer temporário */}
      <Box 
        as="footer" 
        textAlign="center" 
        py={12} 
        borderTop="1px solid"
        borderColor="whiteAlpha.100"
        role="contentinfo"
      >
        <Box fontSize="sm" color="whiteAlpha.700">
          © 2025 Vinícius Silva Queiroz • Desenvolvedor Fullstack
        </Box>
        <Box fontSize="sm" color="whiteAlpha.600" mt={2}>
          Feito com Next.js 15, React 19 e Chakra UI
        </Box>
      </Box>
    </Box>
  );
}