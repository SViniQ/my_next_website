import { useColorModeValue } from '@chakra-ui/react';
import { THEME_COLORS } from '../constants';
import { ThemeColors } from '../types';

export const useThemeColors = (): ThemeColors => {
  const bgColor = useColorModeValue(THEME_COLORS.light.bgColor, THEME_COLORS.dark.bgColor);
  const surfaceColor = useColorModeValue(THEME_COLORS.light.surfaceColor, THEME_COLORS.dark.surfaceColor);
  const textColor = useColorModeValue(THEME_COLORS.light.textColor, THEME_COLORS.dark.textColor);
  const mutedColor = useColorModeValue(THEME_COLORS.light.mutedColor, THEME_COLORS.dark.mutedColor);
  const textSecondary = useColorModeValue(THEME_COLORS.light.textSecondary, THEME_COLORS.dark.textSecondary);

  return {
    bgColor,
    surfaceColor,
    textColor,
    mutedColor,
    textSecondary,
    accentBlue: THEME_COLORS.accent.blue,
    accentPurple: THEME_COLORS.accent.purple
  };
};