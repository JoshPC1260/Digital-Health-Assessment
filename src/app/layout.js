import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"]
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44122818.js"></script>

      <body className={`${poppins.className} antialiased bg-gradient-to-br from-sky-200 from-5% via-white to-white`} >
        
        {children}
        </body>
    </html>
  );
}
