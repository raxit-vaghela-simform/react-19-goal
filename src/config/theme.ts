import { createTheme } from "@mui/material/styles";

export const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: { main: "#1e3a8a" },
        secondary: { main: "#0f766e" },
        background: {
          default: "#f8fafc",
          paper: "#ffffff",
        },
        text: {
          primary: "#0f172a",
          secondary: "#334155",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: { main: "#93c5fd" },
        secondary: { main: "#5eead4" },
        background: {
          default: "#0b1120",
          paper: "#111827",
        },
        text: {
          primary: "#e2e8f0",
          secondary: "#94a3b8",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
