/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/8tFGCWi8HRS
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "./ui/header"
import { Footer } from "./ui/footer"

export function Main() {
  return (
    <>
      <Header />
      <div className="flex flex-col overflow-hidden">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] mx-auto">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl text-black"
                    style={{
                      fontFamily: "\Poppins\, sans-serif\\",
                    }}
                  >
                    Streamline Your Hackathon Infrastructure
                  </h1>
                  <p
                    className="max-w-[600px] text-[#6c7c8a] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors duration-300"
                    style={{
                      fontFamily: "\Poppins\, sans-serif\\",
                    }}
                  >
                    Easily create and manage your AWS resources for your next hackathon. Login with GitHub and get
                    started in minutes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/start">
                    <Button
                      className="w-full min-[400px]:w-auto bg-[#b0d8f5] text-gray-900 hover:bg-[#b0d8f5]/90"
                      style={{
                        fontFamily: "\Poppins\, sans-serif\\",
                      }}
                      variant="primary"
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Button
                    className="w-full min-[400px]:w-auto text-gray-900 hover:bg-[#b0d8f5]/90 transition-colors duration-300"
                    style={{
                      fontFamily: "\Poppins\, sans-serif\\",
                    }}
                    variant="outline"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
