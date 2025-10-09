'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  useColorMode,
  useColorModeValue,
  IconButton,
  VStack,
  HStack,
  Card,
  CardBody,
  Badge,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { 
  FiSun, 
  FiMoon,
} from 'react-icons/fi';
import { SiSpring, SiNodedotjs, SiNextdotjs, SiJavascript, SiPostgresql, SiDocker, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Portfolio() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);

  // Cores baseadas no Figma
  const bgColor = useColorModeValue('#F7F7F8', '#0C0C0D');
  const surfaceColor = useColorModeValue('#FFFFFF', '#121214');
  const textColor = useColorModeValue('#111111', '#F5F5F7');
  const mutedColor = useColorModeValue('#E5E5E7', '#2C2C2E');
  const textSecondary = useColorModeValue('#374151', '#D1D5DB');
  const accentBlue = '#1E40FF';
  const accentPurple = '#8B5CF6';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Java', icon: FaJava, color: '#f89820' },
    { name: 'Spring Boot', icon: SiSpring, color: '#6db33f' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
    { name: 'Next.js', icon: SiNextdotjs, color: textColor },
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Docker', icon: SiDocker, color: '#0db7ed' },
    { name: 'Git', icon: SiGit, color: '#f05032' }
  ];

  return (
    <Box bg={bgColor} color={textColor} minH="100vh" transition="all 0.2s">
      {/* Header/Navbar */}
      <Box
        position="sticky"
        top={0}
        zIndex={50}
        bg={scrolled ? `${surfaceColor}CC` : 'transparent'}
        backdropFilter={scrolled ? 'blur(20px)' : 'none'}
        borderBottom={scrolled ? `1px solid ${mutedColor}` : 'none'}
        transition="all 0.3s"
      >
        <Container maxW="1200px" py={4}>
          <Flex justify="space-between" align="center">
            <Heading
              size="lg"
              fontWeight="600"
              bgGradient={`linear(to-r, ${accentBlue}, ${accentPurple})`}
              bgClip="text"
              letterSpacing="tight"
            >
              VQ
            </Heading>
            
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
              <Link href="#about" _hover={{ color: accentBlue }} transition="all 0.2s">
                Sobre
              </Link>
              <Link href="#projects" _hover={{ color: accentBlue }} transition="all 0.2s">
                Projetos
              </Link>
              <Link href="#experience" _hover={{ color: accentBlue }} transition="all 0.2s">
                Experiência
              </Link>
              <Link href="#contact" _hover={{ color: accentBlue }} transition="all 0.2s">
                Contato
              </Link>
            </HStack>

            <IconButton
              aria-label="Toggle theme"
              icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
              onClick={toggleColorMode}
              bg={surfaceColor}
              border={`1px solid ${mutedColor}`}
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.2s"
            />
          </Flex>
        </Container>
      </Box>

      <Container maxW="1200px" px={6}>
        {/* Hero Section */}
        <Grid
          templateColumns={{ base: '1fr', lg: '7fr 5fr' }}
          gap={12}
          alignItems="center"
          minH="calc(100vh - 80px)"
          py={20}
        >
          <GridItem>
            <VStack align="start" spacing={6}>
              <Badge
                px={4}
                py={2}
                borderRadius="full"
                bg={`${accentBlue}1A`}
                color={accentBlue}
                fontSize="sm"
                fontWeight="500"
              >
                Disponível para projetos
              </Badge>
              
              <Heading
                size={{ base: '3xl', lg: '4xl' }}
                fontWeight="700"
                lineHeight="tight"
              >
                Olá, eu sou{' '}
                <Text
                  as="span"
                  bgGradient={`linear(to-r, ${accentBlue}, ${accentPurple})`}
                  bgClip="text"
                >
                  Vinícius Silva Queiroz
                </Text>
              </Heading>
              
              <Text
                fontSize="xl"
                color={textSecondary}
                maxW="2xl"
                lineHeight="relaxed"
              >
                Desenvolvedor Fullstack focado em soluções escaláveis e intuitivas. 
                Transformo ideias em produtos digitais de alta qualidade.
              </Text>
              
              <HStack spacing={4} pt={4}>
                <Button
                  as="a"
                  href="#projects"
                  bg={accentBlue}
                  color="white"
                  size="lg"
                  fontWeight="500"
                  _hover={{ transform: 'scale(1.03)', shadow: 'xl' }}
                  transition="all 0.2s"
                >
                  Ver Projetos
                </Button>
                <Button
                  as="a"
                  href="#contact"
                  variant="outline"
                  borderColor={accentPurple}
                  color={accentPurple}
                  size="lg"
                  fontWeight="500"
                  _hover={{ 
                    bg: accentPurple, 
                    color: 'white',
                    transform: 'scale(1.03)' 
                  }}
                  transition="all 0.2s"
                >
                  Entrar em Contato
                </Button>
              </HStack>
            </VStack>
          </GridItem>
          
          <GridItem>
            <Box position="relative">
              <Box
                position="absolute"
                inset={0}
                bgGradient={`linear(to-r, ${accentBlue}, ${accentPurple})`}
                borderRadius="2xl"
                filter="blur(60px)"
                opacity={0.2}
              />
              <Card
                bg={surfaceColor}
                border={`1px solid ${mutedColor}`}
                borderRadius="2xl"
                shadow="2xl"
                backdropFilter="blur(10px)"
                position="relative"
              >
                <CardBody p={8}>
                  <HStack spacing={2} mb={4}>
                    <Box w={3} h={3} borderRadius="full" bg="red.500" />
                    <Box w={3} h={3} borderRadius="full" bg="yellow.500" />
                    <Box w={3} h={3} borderRadius="full" bg="green.500" />
                  </HStack>
                  <VStack spacing={3} fontFamily="mono" fontSize="sm" align="start">
                    <Text color={accentPurple}>
                      const <Text as="span" color={textColor}>developer</Text> = {'{'}
                    </Text>
                    <Text pl={4} color={textSecondary}>
                      name: <Text as="span" color="green.600">&apos;Vinícius&apos;</Text>,
                    </Text>
                    <Text pl={4} color={textSecondary}>
                      role: <Text as="span" color="green.600">&apos;Fullstack&apos;</Text>,
                    </Text>
                    <Text pl={4} color={textSecondary}>
                      skills: [<Text as="span" color="green.600">&apos;Java&apos;</Text>, <Text as="span" color="green.600">&apos;Spring&apos;</Text>, <Text as="span" color="green.600">&apos;Next.js&apos;</Text>],
                    </Text>
                    <Text pl={4} color={textSecondary}>
                      passion: <Text as="span" color="orange.500">true</Text>
                    </Text>
                    <Text color={accentPurple}>{'}'}</Text>
                  </VStack>
                </CardBody>
              </Card>
            </Box>
          </GridItem>
        </Grid>

        {/* Skills Section */}
        <Box id="skills" py={20}>
          <Heading size="xl" fontWeight="700" textAlign="center" mb={12}>
            Habilidades & Tecnologias
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={skill.name}
                  bg={surfaceColor}
                  border={`1px solid ${mutedColor}`}
                  borderRadius="xl"
                  p={6}
                  _hover={{
                    borderColor: accentBlue,
                    shadow: 'xl',
                    transform: 'translateY(-4px)'
                  }}
                  transition="all 0.3s"
                  style={{ animationDelay: `${i * 50}ms` }}
                  className="slide-up"
                >
                  <VStack spacing={3}>
                    <Flex
                      w={14}
                      h={14}
                      borderRadius="lg"
                      bg={surfaceColor}
                      align="center"
                      justify="center"
                      _groupHover={{ transform: 'scale(1.1)' }}
                      transition="transform 0.2s"
                    >
                      <Icon size={28} color={skill.color} />
                    </Flex>
                    <Text fontWeight="600">{skill.name}</Text>
                  </VStack>
                </Card>
              );
            })}
          </SimpleGrid>
        </Box>

        {/* Footer temporário */}
        <Box textAlign="center" py={12}>
          <Text fontSize="sm" color={useColorModeValue('#6B7280', '#9CA3AF')}>
             2025 Vinícius Silva Queiroz  Desenvolvedor Fullstack
          </Text>
          <Text fontSize="sm" color={useColorModeValue('#6B7280', '#9CA3AF')} mt={2}>
            Feito com Next.js, React e Chakra UI
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
