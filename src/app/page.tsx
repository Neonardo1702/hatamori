import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <title>
        <Link href="/" className="z-10 w-full max-w-5xl items-center justify-center lg:flex">
          Hatamori Agritech
        </Link>
      </title>
    </main>
  );
}
