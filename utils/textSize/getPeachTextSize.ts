export const fontSizes: { small: number; medium: number; large: number }
 = { small: 12, medium: 20, large: 29 }


export const getPeachFontSize = (
  sizeType: "small" | "medium" | "large"
): number => {

  return fontSizes[sizeType];
};


