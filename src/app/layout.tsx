import type { Metadata } from "next";
import "./globals.scss";
import {ThemeProvider} from "next-themes";


export const metadata: Metadata = {
  title: "Alexandre Journet | Portfolio",
  description: "Explore my portfolio and discover my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
    <head>
        <title>Alexandre Journet | Portfolio</title>
        <meta name="robots" content="all"/>
        <meta
            name="description"
            content="Full-stack développeur depuis 5 ans. Voici mon parcours, mes expériences et mes projets. Il a été développé en Next.js et hébergé sur Github Pages."
        />
        <meta property="og:title" content="Alexandre Journet | Portfolio"/>
        <meta
            property="og:description"
            content="Full-stack développeur depuis 5 ans. Voici mon parcours, mes expériences et mes projets. Il a été développé en Next.js et hébergé sur Github Pages."
        />
        <meta
            property="og:image"
            content="https://alexandrejournet.dev/assets/images/homepage.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>
    </head>
    <body>
    <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableColorScheme={true}
        enableSystem={true}
    >{children}
    </ThemeProvider>
    </body>
    </html>
  );
}
