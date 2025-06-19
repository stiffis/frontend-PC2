// utils/storage.ts
// Utilidades para manejar la apiKey en localStorage

const API_KEY_STORAGE = "apikey"; // Cambia "apikey" por el nombre correspodiente

export function setApiKey(key: string) {
  localStorage.setItem(API_KEY_STORAGE, key);
}

export function getApiKey(): string | null {
  return localStorage.getItem(API_KEY_STORAGE);
}

export function removeApiKey() {
  localStorage.removeItem(API_KEY_STORAGE);
}
