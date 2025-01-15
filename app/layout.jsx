import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}

        <footer
          style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}
        >
          © 2023 Fran Agulto Dev Stoke
        </footer>
      </body>
    </html>
  );
}
