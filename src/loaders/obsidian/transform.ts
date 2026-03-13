import type { AssetToCopy, PublicAssetRegistry } from './obsidian';
import {replacers} from './replacers'

export function transformObsidian(
  filePath: string,
  content: string,
  vaultBasePath: string,
  publicAssetsDir: string,
  publicAssetRegistry: PublicAssetRegistry,
) {
  let result = content;
  const assetsToCopy: AssetToCopy[] = [];

  result = replacers.headings(result);
  result = replacers.internalAnchorLinks(result);
  result = replacers.embeds(result, filePath, vaultBasePath, publicAssetsDir, publicAssetRegistry, assetsToCopy);
  result = replacers.wikiLinks(result);
  result = replacers.externalLinks(result);

  return {
    content: result,
    assetsToCopy,
  };
}
