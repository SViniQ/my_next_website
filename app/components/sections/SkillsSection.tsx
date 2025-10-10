import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  VStack,
  Flex,
  Badge,
  HStack
} from '@chakra-ui/react';
import { useThemeColors } from '../../hooks/useThemeColors';
import { SKILLS } from '../../constants';
import { Skill } from '../../types';

const SKILL_CATEGORIES = {
  frontend: { label: 'Frontend', color: '#3b82f6' },
  backend: { label: 'Backend', color: '#ef4444' },
  database: { label: 'Database', color: '#10b981' },
  devops: { label: 'DevOps', color: '#f59e0b' },
  tools: { label: 'Tools', color: '#8b5cf6' }
};

export const SkillsSection: React.FC = () => {
  const { surfaceColor, textColor, mutedColor, textSecondary, accentBlue } = useThemeColors();

  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category]!.push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Box id="skills" as="section" py={20}>
      <Container maxW="1200px" px={6}>
        {/* Section Header */}
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading
            as="h2"
            size="xl"
            fontWeight="700"
            bgGradient={`linear(to-r, ${accentBlue}, #8b5cf6)`}
            bgClip="text"
            letterSpacing="-0.02em"
          >
            Habilidades & Tecnologias
          </Heading>
          <Text
            fontSize="lg"
            color={textSecondary}
            maxW="2xl"
            lineHeight="relaxed"
          >
            Tecnologias e ferramentas que domino para criar soluções completas e escaláveis
          </Text>
        </VStack>

        {/* Skills by Category */}
        <VStack spacing={12}>
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <Box key={category} w="100%">
              {/* Category Header */}
              <HStack mb={6} justify="center">
                <Badge
                  colorScheme="blue"
                  variant="subtle"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="600"
                  bg={`${SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES]?.color}1A`}
                  color={SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES]?.color}
                >
                  {SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES]?.label}
                </Badge>
              </HStack>

              {/* Skills Grid */}
              <SimpleGrid 
                columns={{ base: 2, md: 3, lg: skills.length > 3 ? 4 : skills.length }} 
                spacing={6}
                justifyItems="center"
              >
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <Card
                      key={skill.name}
                      bg={surfaceColor}
                      border={`1px solid ${mutedColor}`}
                      borderRadius="xl"
                      p={6}
                      minH="120px"
                      w="full"
                      maxW="200px"
                      _hover={{
                        borderColor: skill.color,
                        shadow: 'xl',
                        transform: 'translateY(-4px)',
                        bg: `${skill.color}08`
                      }}
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        opacity: 0
                      }}
                      className="slide-up"
                      cursor="pointer"
                      role="button"
                      tabIndex={0}
                    >
                      <VStack spacing={4} h="full" justify="center">
                        {/* Icon Container */}
                        <Flex
                          w={16}
                          h={16}
                          borderRadius="xl"
                          bg={`${skill.color}15`}
                          align="center"
                          justify="center"
                          _groupHover={{ transform: 'scale(1.1)' }}
                          transition="transform 0.2s"
                          position="relative"
                          _before={{
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            borderRadius: 'xl',
                            bg: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                            opacity: 0,
                            transition: 'opacity 0.3s'
                          }}
                          _hover={{
                            _before: {
                              opacity: 1
                            }
                          }}
                        >
                          <Icon size={32} color={skill.color} />
                        </Flex>

                        {/* Skill Name */}
                        <Text 
                          fontWeight="600" 
                          color={textColor}
                          fontSize="sm"
                          textAlign="center"
                          lineHeight="tight"
                        >
                          {skill.name}
                        </Text>
                      </VStack>
                    </Card>
                  );
                })}
              </SimpleGrid>
            </Box>
          ))}
        </VStack>

        {/* Additional Info */}
        <Box textAlign="center" mt={16}>
          <Text fontSize="sm" color={textSecondary} fontStyle="italic">
            Sempre aprendendo novas tecnologias e aprimorando as existentes
          </Text>
        </Box>
      </Container>
    </Box>
  );
};