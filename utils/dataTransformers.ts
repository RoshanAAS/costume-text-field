export const transform = (str: string, transformers: string[]): string => {
  let result = str.trimLeft(); // Remove leading spaces
  if (str && transformers?.length) {
    transformers.forEach((tfx) => {
      if (tfx === "uppercase") {
        result = result.toUpperCase();
      }

      if (tfx === "lowercase") {
        result = result.toLowerCase();
      }
      if (tfx === "replaceSpace") {
        result = result.replace(/ /g, "");
      }

      if (tfx === "multipleToSingleSpace") {
        result = result.replace(/\s+/g, " ");
      }

      if (tfx === "capitalizeFirstLetter") {
        result = result.charAt(0).toUpperCase() + result.slice(1);
      }

      if (tfx === "removeSpecialCharacters") {
        result = result.replace(/[^a-zA-Z0-9 ]/g, "");
      }

      if (tfx === "noSpecialCharacters") {
        result = result.replace(/[^a-zA-Z0-9 ]/g, ""); // Replaces special characters and keeps alphanumerical and space
      }
    });
  }
  return result;
};
