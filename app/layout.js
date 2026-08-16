import "./globals.css";

export const metadata = {
  title: "Citizen Shield | Know Your Police Rights (India)",
  description: "Indian Citizen's Guide to Police Rights under BNSS & BNS 2023. Understand your rights in 30 seconds.",
  icons: {
    icon: "/logo.jpg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
