import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import StyledComponentsRegistry from './registry';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  style={{ margin: 0, padding: 0 }}>
      <Head>
        <title>PSH ChatApp</title>
        <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap`} />
      </Head>
      <body
        className={montserrat.className}
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            boxSizing: 'border-box',
            margin: 0,
          }}
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
