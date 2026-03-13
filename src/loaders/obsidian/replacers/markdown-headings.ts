import { slugify } from "../../../utils/strings";

export const replaceMarkdownHeadings = (result: string) => {
  return result.replace(/^(#{1,6})\s+(.*)$/gm, (_, hashes, title) => {
    const level = hashes.length;
    const slug = slugify(title);
    return `<h${level} id="${slug}">${title}</h${level}>`;
  });
};