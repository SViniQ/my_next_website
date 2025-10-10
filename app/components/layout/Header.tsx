import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useThemeColors } from '../../hooks/useThemeColors';
import { NAV_ITEMS } from '../../constants';

export const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const scrolled = useScrollPosition();
  const { surfaceColor, mutedColor, accentBlue, accentPurple } = useThemeColors();

  const handleSmoothScroll = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={50}
      bg={scrolled ? `${surfaceColor}CC` : 'transparent'}
      backdropFilter={scrolled ? 'blur(20px)' : 'none'}
      borderBottom={scrolled ? `1px solid ${mutedColor}` : 'none'}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      role="banner"
    >
      <Container maxW="1200px" py={4}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Heading
            as="h1"
            size="lg"
            fontWeight="600"
            bgGradient={`linear(to-r, ${accentBlue}, ${accentPurple})`}
            bgClip="text"
            letterSpacing="tight"
            cursor="pointer"
            onClick={() => handleSmoothScroll('#home')}
            _hover={{ transform: 'scale(1.05)' }}
            transition="transform 0.2s"
          >
            VQ
          </Heading>

          {/* Desktop Navigation */}
          <HStack 
            as="nav" 
            spacing={8} 
            display={{ base: 'none', md: 'flex' }}
            role="navigation"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                onClick={() => handleSmoothScroll(item.href)}
                _hover={{ 
                  color: accentBlue,
                  transform: 'translateY(-1px)',
                  _after: {
                    width: '100%'
                  }
                }}
                transition="all 0.2s"
                fontWeight="500"
                cursor="pointer"
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-4px',
                  left: '50%',
                  bg: accentBlue,
                  transition: 'all 0.2s',
                  transform: 'translateX(-50%)'
                }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          {/* Theme Toggle */}
          <IconButton
            aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
            icon={colorMode === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
            onClick={toggleColorMode}
            bg={surfaceColor}
            border={`1px solid ${mutedColor}`}
            _hover={{ 
              transform: 'scale(1.05)',
              borderColor: accentBlue
            }}
            _active={{
              transform: 'scale(0.95)'
            }}
            transition="all 0.2s"
            size="md"
          />
        </Flex>
      </Container>
    </Box>
  );
};