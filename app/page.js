import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"



export default function Home() {
  return (
    <div className="container min-h-screen bg-[#373A40] ">


      <div className="uppercase md:text-6xl text-xl  tracking-widest text-center font-bold p-16 text-[#EEEEEE]">
        add new blog
      </div>

      
        <p className="group">
          <Button className="flex justify-center mx-auto uppercase bg-[#DC5F00] text-white rounded-3xl text-xl py-6 px-8 border-2 border-[#DC5F00] hover:bg-[#373A40] hover:text-[#F6F5F2]">
           <Link href="/blog" className="transform transition-transform duration-300 group-hover:scale-110"> Add New Blog</Link>
          </Button>
        </p>
      




    </div>

  );
}
