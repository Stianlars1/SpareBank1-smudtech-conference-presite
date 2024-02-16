import Image from "next/image";
import Link from "next/link";
import "./css/navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Image
        src={"/sparebank1.png"}
        alt="sparebank 1 logo"
        width={81}
        height={81}
      />
      <ul>
        <Link href="/" className="ffe-body-text">
          Program
        </Link>
        <Link href="/praktisk-info" className="ffe-body-text ">
          Praktisk info
        </Link>
      </ul>
    </nav>
  );
};
