export const truncateText = (text: string, maxLength: number) => {
  const words = text.split(" ");
  let truncatedText = "";

  for (let i = 0; i < words.length; i++) {
    if ((truncatedText + words[i]).length + 1 > maxLength) {
      break;
    }

    truncatedText += (truncatedText ? " " : "") + words[i];
  }

  if (truncatedText.length < text.length) {
    truncatedText += "...";
  }

  return truncatedText;
};
