import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
   children,
}: Readonly<{
  children: React.ReactNode;
}>
) {

  return (
    <div className="h-screen flex ">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14% p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 decoration-0 ">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">SIS</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col overflow-y-auto max-h-screen"   style={{ scrollbarWidth: "none",msOverflowStyle: "none"
  }}>
       <Navbar />
       {children}
      </div>
    </div>
  );
}
