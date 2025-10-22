import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Badge,
  Card,
  CardBody
} from '@chakra-ui/react';
import { useThemeColors } from '../../hooks/useThemeColors';
import { SOCIAL_LINKS } from '../../constants';

export const HeroSection: React.FC = () => {
  const { 
    surfaceColor, 
    textColor, 
    mutedColor, 
    textSecondary, 
    accentBlue, 
    accentPurple 
  } = useThemeColors();

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

  const handleContactClick = () => {
    const email = 'coder.fullstack.vinicius@gmail.com';
    window.open(`mailto:${email}?subject=Contato via Portfolio`);
  };

  return (
    <Box 
      id="home" 
      as="section" 
      minH="100vh" 
      display="flex" 
      alignItems="center"
      py={{ base: 16, lg: 20 }}
    >
      <Container maxW="1200px" px={6}>
        <Grid
          templateColumns={{ base: '1fr', lg: '7fr 5fr' }}
          gap={12}
          alignItems="center"
        >
          {/* Content */}
          <GridItem>
            <VStack align="start" spacing={6} className="fade-in">
              {/* Status Badge */}
              <Badge
                px={4}
                py={2}
                borderRadius="full"
                bg={`${accentBlue}1A`}
                color={accentBlue}
                fontSize="sm"
                fontWeight="500"
                border={`1px solid ${accentBlue}33`}
                _hover={{
                  bg: `${accentBlue}26`,
                  transform: 'translateY(-1px)'
                }}
                transition="all 0.2s"
              >
                🚀 Disponível para projetos
              </Badge>

              {/* Main Heading */}
              <Heading
                as="h1"
                size={{ base: '3xl', lg: '4xl' }}
                fontWeight="700"
                lineHeight="tight"
                letterSpacing="-0.02em"
              >
                Olá, me chamo{' '}
                <Text
                  as="span"
                  bgGradient={`linear(to-r, ${accentBlue}, ${accentPurple})`}
                  bgClip="text"
                  display="inline-block"
                  _hover={{
                    transform: 'scale(1.02)'
                  }}
                  transition="transform 0.2s"
                >
                  Vinícius Silva Queiroz
                </Text>
              </Heading>

              {/* Description */}
              <Text
                fontSize={{ base: 'lg', lg: 'xl' }}
                color={textSecondary}
                maxW="2xl"
                lineHeight="relaxed"
                fontWeight="400"
              >
                Desenvolvedor <strong>Fullstack Júnior</strong> especializado em soluções escaláveis e intuitivas. 
                Transformo ideias complexas em produtos digitais de alta performance e qualidade excepcional.
              </Text>

              {/* CTA Buttons */}
              <HStack spacing={4} pt={4} flexWrap="wrap">
                <Button
                  onClick={() => handleSmoothScroll('#projects')}
                  bg={accentBlue}
                  color="white"
                  size="lg"
                  fontWeight="600"
                  _hover={{ 
                    transform: 'translateY(-2px)', 
                    shadow: 'xl',
                    bg: accentBlue
                  }}
                  _active={{
                    transform: 'translateY(0)'
                  }}
                  transition="all 0.2s"
                  rightIcon={<Box as="span">→</Box>}
                >
                  Ver Projetos
                </Button>
                
                <Button
                  onClick={handleContactClick}
                  variant="outline"
                  borderColor={accentPurple}
                  color={accentPurple}
                  size="lg"
                  fontWeight="600"
                  _hover={{ 
                    bg: accentPurple, 
                    color: 'white',
                    transform: 'translateY(-2px)',
                    shadow: 'lg'
                  }}
                  _active={{
                    transform: 'translateY(0)'
                  }}
                  transition="all 0.2s"
                >
                  Entrar em Contato
                </Button>
              </HStack>

              {/* Social Links */}
              <HStack spacing={4} pt={2}>
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.name}
                      as="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      leftIcon={<Icon />}
                      variant="ghost"
                      size="sm"
                      color={textSecondary}
                      _hover={{
                        color: social.color,
                        transform: 'translateY(-1px)'
                      }}
                      transition="all 0.2s"
                    >
                      {social.name}
                    </Button>
                  );
                })}
              </HStack>
            </VStack>
          </GridItem>

          {/* Code Card */}
          <GridItem>
            <Box position="relative" className="slide-up">
              {/* Glow Effect */}
              <Box
                position="absolute"
                inset={0}
                bgGradient={`linear(to-r, ${accentBlue}, ${accentPurple})`}
                borderRadius="2xl"
                filter="blur(60px)"
                opacity={0.15}
                zIndex={0}
              />
              
              {/* Card */}
              <Card
                bg={surfaceColor}
                border={`1px solid ${mutedColor}`}
                borderRadius="2xl"
                shadow="2xl"
                backdropFilter="blur(10px)"
                position="relative"
                zIndex={1}
                _hover={{
                  transform: 'translateY(-4px)',
                  shadow: '2xl'
                }}
                transition="all 0.3s"
              >
                <CardBody p={8}>
                  {/* Terminal Header */}
                  <HStack spacing={2} mb={6}>
                    <Box w={3} h={3} borderRadius="full" bg="red.500" />
                    <Box w={3} h={3} borderRadius="full" bg="yellow.500" />
                    <Box w={3} h={3} borderRadius="full" bg="green.500" />
                  </HStack>
                  
                  {/* Code */}
                  <VStack spacing={3} fontFamily="'JetBrains Mono', monospace" fontSize="sm" align="start">
                    <Text color={accentPurple} fontWeight="600">
                      const <Text as="span" color={textColor}>desenvolvedor</Text> = {'{'}
                    </Text>
                    <Text pl={4} color={textSecondary}>
                      nome: <Text as="span" color="green.400" fontWeight="500">&apos;Vinícius&apos;</Text>,
                    </Text>
                    <Text pl={4} color={textSecondary}>
                      funcao: <Text as="span" color="green.400" fontWeight="500">&apos;Fullstack Júnior&apos;</Text>,
                    </Text>
                    <Text pl={4} color={textSecondary}>
                      stacks: [<Text as="span" color="green.400" fontWeight="500">&apos;Java&apos;</Text>, <Text as="span" color="green.400" fontWeight="500">&apos;Spring&apos;</Text>, <Text as="span" color="green.400" fontWeight="500">&apos;Next.js&apos;</Text>],
                    </Text>
                    <Text pl={4} color={textSecondary}>
                      experiencia: <Text as="span" color="orange.400" fontWeight="500">1</Text>,
                    </Text>
                    <Text pl={4} color={textSecondary}>
                      tempo_de_experiencia: <Text as="span" color="orange.400" fontWeight="500">true</Text>,
                    </Text>
                    <Text pl={4} color={textSecondary}>
                      quantidade_de_cafe: <Text as="span" color="orange.400" fontWeight="500">∞</Text>
                    </Text>
                    <Text pl={4} color={textSecondary}>
                      dormir: <Text as="span" color="orange.400" fontWeight="500">false</Text>
                    </Text>
                    <Text color={accentPurple} fontWeight="600">{'}'}</Text>
                  </VStack>
                </CardBody>
              </Card>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};