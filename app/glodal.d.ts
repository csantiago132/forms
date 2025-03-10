/// <reference types="vite/client" />
// global.d.ts
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.css?url' {
  const url: string;
  export default url;
}
declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.css' {
  const content: Record<string, string>;

  export default content;
}

declare module '*css.?url' {
  const content: string;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_AUTH_DOMAIN: string;
  readonly VITE_AUTH_CLIENT_ID: string;
  readonly VITE_AUTH_AUDIENCE: string;
  readonly VITE_AUTH_SCOPE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
