declare module '*.jpg' {
  export default '' as string;
}
declare module '*.png' {
  export default '' as string;
}
declare module '*.svg' {
  export default '' as string;
}

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_BASE_URL: string;
  }
}
