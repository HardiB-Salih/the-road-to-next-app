import { ThemeProvider as BaseThemesProvider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <BaseThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BaseThemesProvider>
  );
}
