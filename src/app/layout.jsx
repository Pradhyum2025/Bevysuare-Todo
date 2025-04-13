import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/core/todo/Providers";
import NewTodoBtn from "@/components/core/todo/NewTodoBtn";
import TodosListing from "@/components/core/todo/TodosListing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bavysquare Todo",
  description: "Bavysquare Assignment Todo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Header/>
        <Toaster/>
        <Providers>
           <div className="flex justify-around items-start bg-gray-100 min-h-[90vh] flex-col md:flex-row py-10" >
                {/* section1 -- left */}
                <section className="w-[100%] sm:w-[40%]  p-4 lg:px-10 flex flex-col gap-5">
          
                  {/* Btn and Search */}
                 <NewTodoBtn/>
                  {/* All todo Lists */}
                  <TodosListing/>
          
                </section>

                {/* section2  ---right */}
                <section className="w-full sm:w-[50%] h-full p-4 mt-15 lg:px-10">
                  {/* show todo */}
                {children}
                </section>
          
              </div>
        </Providers>
      </body>
    </html>
  );
}
