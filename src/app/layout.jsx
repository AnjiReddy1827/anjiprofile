"use client";
import { Inter } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";

import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 w-full`}>
        {pathname !== "/" && (
          <header className="bg-gray-900 text-white ">
            <div className="flex justify-between items-center">
              <div className="text-4xl font-black"></div>
              <div className="flex ml-10 md:ml-0 md:gap-12 gap-6 font-extrabold items-center justify-center my-4 mr-10">
                <Link href="/dashboard" className="hover:underline">
                  Home
                </Link>
                <Link href="/aboutMe" className="text-nowrap">
                  About Me
                </Link>
                <Link href="/project">Projects</Link>
                {/* <Link href="/#">Services</Link> */}
                <Link href="/experience">Experience</Link>
                <button
                  onClick={handleClick}
                  className="bg-buttonColorMain hover:bg-blue-700 text-white font-bold py-2  px-4 rounded"
                >
                  Contact
                </button>
              </div>
            </div>
          </header>
        )}

        {children}
        {/* <footer className="bg-red-800 text-5xl">
          <p>footer</p>
        </footer> */}
      </body>
    </html>
  );
}
