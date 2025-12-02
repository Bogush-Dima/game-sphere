export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <div>Plagame</div>
          {children}
        </div>
      </body>
    </html>
  );
}
