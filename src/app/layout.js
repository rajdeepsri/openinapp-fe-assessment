import "./globals.css";

export const metadata = {
  title: "OpenInApp Assessment",
  description: "assessment for openinapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
