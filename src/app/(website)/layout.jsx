import "../globals.css";
import { Inter } from "next/font/google";
// import NextAuthSessionProvider from '../../context/NextAuthContext'
import NavBar2 from "@/components/navbar2";
import Footer from "@/components/footer";
import LoadingBar from "@/components/loadingBar";
const inter = Inter({ subsets: ["latin"] });

export default function WebsiteLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingBar />
        {/* <NextAuthSessionProvider> */}
        <NavBar2 />
        <main>{children}</main>
        <Footer />
        {/* </NextAuthSessionProvider> */}
      </body>
    </html>
  );
}
