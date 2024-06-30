import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost"),
    title: {
      template: '%s | localhost',
      default: 'localhost', // default is required when using `template`
    },
    description: 'Lorem ipsum dolar set amet, etc.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}