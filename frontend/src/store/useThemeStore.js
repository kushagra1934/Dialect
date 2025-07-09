import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("dialect-theme")||"coffee",
  setTheme: (theme) => {
    set({ theme }),
    localStorage.setItem('dialect-theme',theme)
  }
}));
