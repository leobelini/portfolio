import { replaceObsidianEmbeds } from "./embeds";
import { replaceExternalLinks } from "./external-links";
import { replaceInternalAnchorLinks } from "./internal-anchor-links";
import { replaceMarkdownHeadings } from "./markdown-headings";
import { replaceWikiLinks } from "./wiki-links";

export const replacers = {
    headings: replaceMarkdownHeadings,
    internalAnchorLinks: replaceInternalAnchorLinks,
    embeds: replaceObsidianEmbeds,
    wikiLinks: replaceWikiLinks,
    externalLinks: replaceExternalLinks,
}