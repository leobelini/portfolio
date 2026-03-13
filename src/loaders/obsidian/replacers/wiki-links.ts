import { slugify } from '../../../utils/strings';

export const replaceWikiLinks = (result: string) => {
  return result.replace(/\[\[(.*?)\]\]/g, (_, link) => {
    const [target, label] = link.split('|');

    const slug = slugify(target);

    return `[${label ?? target}](/blog/${slug})`;
  });
};
