export {};

declare global {
  interface Window {
    gapi: any; // 👈️ turn off type checking
  }
}