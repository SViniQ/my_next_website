'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Card,
  CardBody,
  Badge,
  HStack,
  VStack,
  Button,
  IconButton,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Tag,
  TagLabel,
  Divider,
} from '@chakra-ui/react';
import { FiGithub, FiExternalLink, FiArrowRight, FiCode, FiStar } from 'react-icons/fi';
import { PROJECTS, THEME_COLORS } from '../../constants';
import { useThemeColors } from '../../hooks/useThemeColors';
import type { FC } from 'react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, featured = false }) => {
  const { surfaceColor, mutedColor, textSecondary } = useThemeColors();
  const tagBgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Card
      bg={surfaceColor}
      border={`1px solid ${mutedColor}`}
      borderRadius="2xl"
      overflow="hidden"
      position="relative"
      cursor="pointer"
      shadow="lg"
      _hover={{
        shadow: '2xl',
        borderColor: THEME_COLORS.accent.blue,
        transform: 'translateY(-4px)',
      }}
      transition="all 0.3s ease"
      h={featured ? '400px' : '350px'}
      className="slide-up"
    >
      {/* Gradient Background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="120px"
        bgGradient={project.gradient}
        opacity={0.1}
      />
      
      {/* Featured Badge */}
      {featured && (
        <Badge
          position="absolute"
          top={4}
          right={4}
          bg={`${THEME_COLORS.accent.purple}20`}
          color={THEME_COLORS.accent.purple}
          px={3}
          py={1}
          borderRadius="full"
          fontSize="xs"
          fontWeight="600"
          zIndex={2}
        >
          <HStack spacing={1}>
            <FiStar size={12} />
            <Text>Destaque</Text>
          </HStack>
        </Badge>
      )}

      <CardBody p={6} h="full" display="flex" flexDirection="column">
        {/* Project Header */}
        <VStack align="start" spacing={3} mb={4}>
          <HStack spacing={2}>
            <Box
              w={3}
              h={3}
              borderRadius="full"
              bg={THEME_COLORS.accent.blue}
              opacity={0.8}
            />
            <Text fontSize="sm" color={textSecondary} fontWeight="500">
              {featured ? 'Projeto Destaque' : 'Projeto'}
            </Text>
          </HStack>
          
          <Heading size={featured ? 'lg' : 'md'} fontWeight="700" lineHeight="tight">
            {project.title}
          </Heading>
          
          <Text 
            color={textSecondary} 
            fontSize={featured ? 'md' : 'sm'}
            lineHeight="relaxed"
            noOfLines={featured ? 4 : 3}
          >
            {project.description}
          </Text>
        </VStack>

        {/* Technologies */}
        <Box mb={6} flex="1">
          <Text fontSize="xs" color={textSecondary} mb={2} fontWeight="600" textTransform="uppercase">
            Tecnologias
          </Text>
          <Flex wrap="wrap" gap={2}>
            {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
              <Tag
                key={tech}
                size="sm"
                bg={tagBgColor}
                borderRadius="full"
                px={3}
                py={1}
              >
                <TagLabel fontSize="xs" fontWeight="500">{tech}</TagLabel>
              </Tag>
            ))}
            {project.technologies.length > (featured ? 6 : 4) && (
              <Tag size="sm" bg="transparent" color={textSecondary}>
                <TagLabel fontSize="xs">+{project.technologies.length - (featured ? 6 : 4)}</TagLabel>
              </Tag>
            )}
          </Flex>
        </Box>

        {/* Action Buttons */}
        <HStack spacing={3} mt="auto">
          <Button
            size="sm"
            variant="ghost"
            leftIcon={<FiGithub />}
            _hover={{ bg: `${THEME_COLORS.accent.blue}10` }}
            transition="all 0.2s"
          >
            Código
          </Button>
          <Button
            size="sm"
            variant="ghost"
            leftIcon={<FiExternalLink />}
            _hover={{ bg: `${THEME_COLORS.accent.purple}10` }}
            transition="all 0.2s"
          >
            Demo
          </Button>
          <IconButton
            aria-label="Ver detalhes"
            icon={<FiArrowRight />}
            size="sm"
            variant="ghost"
            ml="auto"
            color={THEME_COLORS.accent.blue}
            _hover={{ transform: 'translateX(4px)' }}
            transition="all 0.2s"
          />
        </HStack>
      </CardBody>
    </Card>
  );
};

export const ProjectsSection: FC = () => {
  const { bgColor, surfaceColor, mutedColor } = useThemeColors();
  
  const featuredProjects = PROJECTS.filter(project => project.featured);
  const regularProjects = PROJECTS.filter(project => !project.featured);

  return (
    <Box id="projects" as="section" py={20} bg={bgColor} minH="100vh">
      <Container maxW="1200px" px={6}>
        <Box>
          {/* Section Header */}
          <Box textAlign="center" mb={16}>
            <HStack justify="center" mb={4}>
              <FiCode color={THEME_COLORS.accent.blue} size={24} />
              <Text
                fontSize="sm"
                color={THEME_COLORS.accent.blue}
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Portfólio
              </Text>
            </HStack>
            
            <Heading 
              size="2xl" 
              fontWeight="800" 
              mb={6}
              bgGradient={`linear(to-r, ${THEME_COLORS.accent.blue}, ${THEME_COLORS.accent.purple})`}
              bgClip="text"
            >
              Projetos Desenvolvidos
            </Heading>
            
            <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.400')} maxW="2xl" mx="auto">
              Uma seleção dos meus trabalhos mais recentes, demonstrando expertise em 
              desenvolvimento full-stack e soluções tecnológicas inovadoras.
            </Text>
          </Box>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <Box mb={16}>
              <HStack mb={8} align="center">
                <FiStar color={THEME_COLORS.accent.purple} />
                <Heading size="lg" fontWeight="700">
                  Projetos em Destaque
                </Heading>
                <Divider />
              </HStack>
              
              <Grid
                templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
                gap={8}
                mb={8}
              >
                {featuredProjects.map((project) => (
                  <GridItem key={project.id}>
                    <ProjectCard 
                      project={project} 
                      featured={true}
                    />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          )}

          {/* Regular Projects */}
          {regularProjects.length > 0 && (
            <Box>
              <HStack mb={8} align="center">
                <FiCode color={THEME_COLORS.accent.blue} />
                <Heading size="lg" fontWeight="700">
                  Outros Projetos
                </Heading>
                <Divider />
              </HStack>
              
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {regularProjects.map((project) => (
                  <ProjectCard 
                    key={project.id}
                    project={project}
                  />
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* CTA Section */}
          <Box 
            textAlign="center" 
            mt={20}
            p={12}
            bg={surfaceColor}
            borderRadius="3xl"
            border={`1px solid ${mutedColor}`}
            position="relative"
            overflow="hidden"
          >
            {/* Background Decoration */}
            <Box
              position="absolute"
              top="-50%"
              left="-50%"
              w="200%"
              h="200%"
              bgGradient={`radial(circle, ${THEME_COLORS.accent.blue}08, transparent 70%)`}
              pointerEvents="none"
            />
            
            <VStack spacing={6} position="relative" zIndex={1}>
              <Heading size="xl" fontWeight="700">
                Interessado em colaborar?
              </Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')} maxW="xl">
                Estou sempre aberto a discutir novos projetos, oportunidades criativas 
                ou parcerias interessantes.
              </Text>
              <HStack spacing={4}>
                <Button
                  size="lg"
                  bg={THEME_COLORS.accent.blue}
                  color="white"
                  _hover={{ 
                    transform: 'translateY(-2px)',
                    shadow: 'xl'
                  }}
                  transition="all 0.2s"
                  rightIcon={<FiArrowRight />}
                >
                  Vamos conversar
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor={THEME_COLORS.accent.purple}
                  color={THEME_COLORS.accent.purple}
                  _hover={{ 
                    bg: THEME_COLORS.accent.purple,
                    color: 'white',
                    transform: 'translateY(-2px)'
                  }}
                  transition="all 0.2s"
                  leftIcon={<FiGithub />}
                >
                  Ver GitHub
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};