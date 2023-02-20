//Shorten and remove HTML tags
//Function to remove HTML tags and reduce length
export const processSummary = (summary: string, length: number) => {
  return summary
    .split(" ")
    .slice(0, length)
    .join(" ")
    .replace(/(<([^>]+)>)/gi, "");
};
