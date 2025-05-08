import { create } from "zustand";
import { persist } from "zustand/middleware";

// Defined type for the theme (light or dark)
type Theme = "light" | "dark";

// Define the interface for the store's state and actions
interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

// Created the Zustand store using the 'create' function
export const useThemeStore = create<ThemeStore>()(
  // Use the 'persist' middleware to save the state to localStorage
  persist(
    (set, get) => ({
      // Initialize the 'theme' state.  Check for browser context
      // to avoid server-side rendering issues.  Use prefers-color-scheme
      // media query if available, otherwise default to 'light'.
      theme:
        typeof window !== "undefined" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      // Define the 'toggleTheme' action to switch between light and dark themes
      toggleTheme: () => {
        // Get the current theme from the store
        const newTheme: Theme = get().theme === "light" ? "dark" : "light";
        // Check for document to avoid server-side errors
        if (typeof document !== "undefined") {
          // Toggle the 'dark' class on the root element (<html>)
          document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark" // Add if newTheme is dark, remove if light
          );
        }
        // Update the 'theme' state in the store
        set({ theme: newTheme });
      },
    }),
    {
      // Configuration object for the 'persist' middleware
      name: "theme", // Key used to store the state in localStorage
      // Optional:  Function called when the state is rehydrated from storage.
      // Useful for performing side effects, like applying the theme to the DOM,
      onRehydrateStorage: () => (state) => {
        // state is the persisted state that was loaded from storage.
        if (state?.theme === "dark") {
          // If the theme from storage is dark, add the 'dark' class
          document.documentElement.classList.add("dark");
        } else {
          // Otherwise, remove the 'dark' class
          document.documentElement.classList.remove("dark");
        }
      },
    }
  )
);
