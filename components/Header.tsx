import { SignIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-4">
        <div className="bg-[#0160FE] w-fit">
          <Image
            className="invert"
            src={
              "https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            }
            width={50}
            height={50}
            alt="logo"
          />
        </div>
        <h1>Stroge Bucket</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        {/* Theme toggler */}
        <ModeToggle />
        {/* User Button */}
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl={"/dashboard"} mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
