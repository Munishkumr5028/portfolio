export const metadata = {
  title: "Munish Portfolio - Full Stack Developer",
  description:
    "Welcome to Munish’s portfolio. Explore projects, contact me, and hire me for freelance work.",
  openGraph: {
    title: "Munish Portfolio - Full Stack Developer",
    description:
      "Welcome to Munish’s portfolio. Explore projects, contact me, and hire me for freelance work.",
    type: "website",
    url: "https://your-actual-portfolio-domain.com", // Replace this!
  },
  twitter: {
    card: "summary_large_image",
    title: "Munish Portfolio - Full Stack Developer",
    description:
      "Welcome to Munish’s portfolio. Explore projects, contact me, and hire me for freelance work.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
