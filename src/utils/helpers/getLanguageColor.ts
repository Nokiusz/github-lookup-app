import colorsJSON from "utils/constants/languageColors.json";

interface IGetColor {
  [key: string]: { color: string | null };
}
export const getLanguageColor = (language: string): string => {
  const colors: IGetColor = colorsJSON;
  const loweredLanguage = language.toLowerCase();
  if (!colors[loweredLanguage].color) return "#fff";

  return colors[loweredLanguage].color as string;
};
