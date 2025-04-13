import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/core/todo/Providers";
import NewTodoBtn from "@/components/core/todo/NewTodoBtn";
import TodosListing from "@/components/core/todo/TodosListing";
import { Poppins } from "next/font/google";
import LeftContainer from "@/components/core/todo/LeftContainer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '500', '600','700','800'], 
  subsets: ['latin'],
  variable: '--font-poppins', 
});

export const metadata = {
  title: "Bavysquare Todo",
  description: "Bavysquare Assignment Todo",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} antialiased`}
        >
        <Header/>
        <Toaster/>
        <Providers>
           <div className="flex justify-around items-start bg-gray-100  flex-col md:flex-row py-10" >
                {/* section1 -- left */}
              <LeftContainer/>

                {/* section2  ---right */}
                <section className="w-full sm:w-[50%] h-[80vh] sm:h-[70vh] lg:px-10  flex flex-col sm:pt-8  px-4 sm:justify-center items-center sticky top-20">
                  {/* show todo */}
                {children}
                </section>
          
              </div>
        </Providers>
      </body>
    </html>
  );
}
