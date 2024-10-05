import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import { HeaderActions } from "./header-actions";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-slate-900 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-4 text-2xl">
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="BigBrain Image"
              className="rounded text-2xl"
            />
            BIGBRAIN
          </Link>

          <nav>
            <Link href="/dashboard" className="hover:text-slate-300">Documents</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
