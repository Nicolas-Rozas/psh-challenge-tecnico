import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "./registry";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ margin: 0, padding: 0 }}>
      <body
        className={montserrat.className}
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            margin: 0,
          }}
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
