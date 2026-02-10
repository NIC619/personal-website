import "./globals.css";

export const metadata = {
  title: "Nic Lin",
  description:
    "Nic Lin — protocol researcher and smart contract engineer focused on L2s, MEV, and secure protocol design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
