export interface GlobOptions {
  pattern: string | string[];
  base?: string;
  publicAssetsDir?: string;
}

export interface AssetToCopy {
  sourcePath: string;
  destinationPath: string;
  publicUrl: string;
}

export type PublicAssetRegistry = Map<string, string>;