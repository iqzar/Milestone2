'use client'
import Link from "next/link";
import { MenuIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

 
export default function Header(){
  return(
    <main className="flex justify-between mt-5">
        <div className="flex ml-10">
        <p className="text-sm pr-1 font-semibold text-green-300">iqra khizar</p>
        <p className="text-[15px] font-serif">|</p>
        <p className="text-[10px] pl-1 pt-1"> Front-end Developer</p>
        </div>
        <ul className="md:block hidden mr-10">
                <li className="space-x-2 font-sans text-sm">
                    <Link className="hover:border-b-4 hover:border-green-200" href={"/about"}>about,</Link>
                    <Link className="hover:border-b-4 hover:border-green-200" href="#skills">skills,</Link>
                    <Link className="hover:border-b-4 hover:border-green-200" href="#projects">work,</Link>
                    <Link className="hover:border-b-4 hover:border-green-200" href="/contactus">contact</Link>
                </li>
                
        </ul>
                
                
                <Sheet>
                <SheetTrigger className="md:hidden"><MenuIcon /></SheetTrigger>
                <SheetContent>
                <ul className="">
                <li className="flex flex-col">
                    <Link href={'/'}>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='#projects'>Projects</Link>
                    <Link href={'/contact'}>Contact</Link>
                </li>
                
                </ul>
                </SheetContent>
                </Sheet>   
                
    </main>
  )
}

          