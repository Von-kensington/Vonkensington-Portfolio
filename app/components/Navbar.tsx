import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-black relative z-10 flex justify-between items-center p-6">
      <div className="text-white text-xl font-medium">Von-Kensington</div>
      <div className="flex gap-6">
        <Link
          href="/Resume.pdf"
          className="text-[#ededed] hover:text-white transition-colors"
        >
          Resume
        </Link>
        <Link
          href="/contact"
          className="text-[#ededed] hover:text-white transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
