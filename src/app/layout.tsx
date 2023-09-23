export const metadata = {
  title: "Rick and Morty | Conexa Challenge",
  description: "Challenge para optar a cargo como developer frontend en conexa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
