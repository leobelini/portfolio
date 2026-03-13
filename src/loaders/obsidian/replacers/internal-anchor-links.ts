import { slugify } from '../../../utils/strings';

export const replaceInternalAnchorLinks = (result: string) => {
  return result.replace(/\[\[#(.*?)\]\]/g, (_, section) => {
    const slug = slugify(section);
    return `<a href="#${slug}">${section}</a>`;
  });
};
