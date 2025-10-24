import "./globals.css";

export const metadata = {
  title: "Central Shop",
  description: "Online Store and Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}

