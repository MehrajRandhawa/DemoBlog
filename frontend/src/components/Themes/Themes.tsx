import React, { createContext, useState } from "react";

type Theme = {
  isDarkmode: boolean;
};

interface ThemeContextInterface {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const defaultTheme: Theme = { isDarkmode: false };

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: defaultTheme,
  setTheme: () => {},
});

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
