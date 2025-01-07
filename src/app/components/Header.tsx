import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <div className="navbar w-[1440px] h-[100px]">
        <div className="logo ">
        <Image src={Logo} width={185} height={41} alt="Picture of the author" className="cursor-pointer" />
        </div>
        <div className="navbtns flex">
          
          <ul className="head">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/shop"}>
              <li>Shop</li>
            </Link>
            <Link href={"/blog"}>
              <li>Blog</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div className="icons">
        <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <AiOutlineShoppingCart />

        </div>


      </div>
    </>
  );
}

