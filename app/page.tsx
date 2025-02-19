import Image from "next/image";
import Link from "next/link";
import HeroParticle from "./components/HeroParticle";

export default function Page() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background pattern overlay */}
      <HeroParticle />
      {/* Navigation */}
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

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Hi, I&apos;m Von-Kensington
            </h1>
            <div className="space-y-4">
              <p className="text-[#a1a1a1] text-lg">
                A Front-End Developer Crafting Seamless Digital Experiences
              </p>
              <p className="text-[#a1a1a1] leading-relaxed">
                Based in Huntsville, Alabama. With a solid foundation in HTML,
                CSS, and JavaScript, I specialize in frontend development and am
                actively expanding my skills in backend technologies to become a
                well-rounded full-stack developer.
              </p>
            </div>
            <Link
              href="/Resume.pdf"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-[#ededed] transition-colors"
            >
              Resume
            </Link>
          </div>

          <div className="relative h-[500px] md:h-[600px]">
            <Image
              draggable={false}
              src="/Silhouete.png"
              alt="Profile Silhouette"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
