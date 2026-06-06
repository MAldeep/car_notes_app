import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full fixed bottom-0 border-t-2 border-t-gray-300 bg-gray-50 py-2 flex justify-center items-center">
      @2026 Copyrights By
      <Link href={"/"} className="text-blue-400 underline px-1">
        Trio
      </Link>
      Advertising
    </footer>
  );
}
