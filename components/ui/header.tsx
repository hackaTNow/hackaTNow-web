import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#b0d8f5] shadow-sm transition-colors duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto text-black">
        <Link className="flex items-center gap-2" href="/">
          <CloudIcon className="h-6 w-6" />
          <span
            className="font-bold"
            style={{
              fontFamily: "\Poppins\, sans-serif\\",
            }}
          >
            HackaTNow
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Button
            className="text-gray-900 hover:bg-[#b0d8f5]/90 transition-colors duration-300"
            size="sm"
            variant="ghost"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">Login with GitHub</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

function CloudIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <>
    <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: '', marginRight: '-5px', fontSize: '1.4em' }}>&lt;</span>
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
    <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'normal', marginLeft: '-5px', fontSize: '1.4em' }}>&gt;</span>
    </>
  )
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
