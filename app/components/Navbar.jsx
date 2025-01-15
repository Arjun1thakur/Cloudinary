import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center py-4">
      <h1 className="mb-4">
        Fran&apos;s Next.js 14 with Next Cloudinary Example
      </h1>
      <div className="flex justify-center space-x-4">
        <Link href="/cartoonify">Cartoonify</Link>
        <Link href="/">Regular Image</Link>
        <Link href="/removebg">No Background</Link>
        <Link href="/social-card">Social Media Image</Link>
      </div>
    </nav>
  );
}
