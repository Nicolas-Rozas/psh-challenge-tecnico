import { Montserrat } from 'next/font/google';
import StyledComponentsRegistry from './registry';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'PSH ChatApp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0 }}>
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