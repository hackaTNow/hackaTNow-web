import Link from "next/link"

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex h-16 items-center px-4 md:px-6 border-t">
      <p
        className="text-xs text-[#6c7c8a] transition-colors duration-300"
        style={{
          fontFamily: "\Poppins\, sans-serif\\",
        }}
      >
        © 2024 HackaTNow. All rights reserved.
      </p>
      <nav className="ml-auto flex gap-4">
        <Link
          className="text-xs hover:underline underline-offset-4 text-[#6c7c8a] transition-colors duration-300"
          href="#"
          style={{
            fontFamily: "\Poppins\, sans-serif\\",
          }}
        >
          Terms
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 text-[#6c7c8a] transition-colors duration-300"
          href="#"
          style={{
            fontFamily: "\Poppins\, sans-serif\\",
          }}
        >
          Privacy
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 text-[#6c7c8a] transition-colors duration-300"
          href="#"
          style={{
            fontFamily: "\Poppins\, sans-serif\\",
          }}
        >
          Contact
        </Link>
      </nav>
    </footer>
  )
}
