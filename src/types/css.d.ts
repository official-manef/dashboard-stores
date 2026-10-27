// TypeScript 6 checks side-effect imports of non-TS files (TS2882) and Next 16's
// generated next-env.d.ts no longer declares `*.css`. This file restores it.
declare module "*.css" {}
