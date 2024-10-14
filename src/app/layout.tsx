"use client";

import "./globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { Montserrat } from "next/font/google";
import { AuthProvider } from "@/contexts/AuthContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          <body className={montserrat.className}>{children}</body>
        </AuthProvider>
      </ThemeProvider>
    </html>
  );
}
