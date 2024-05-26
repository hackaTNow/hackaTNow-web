import { Button } from "@/components/ui/button"
import { Header } from "./ui/header"
import { Footer } from "./ui/footer"
import { Card } from "./ui/card"
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Car } from "lucide-react";

const PopoverTrigger = PopoverPrimitive.Trigger

export function ChooseInfra() {

  return (
    <>
      <Header />
      <div className="flex flex-col overflow-hidden">
        <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 transition-colors duration-300"
          id="build-infrastructure"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-black">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Build Your Hackathon Infrastructure
                </h2>
                <p
                  className="max-w-[900px] text-[#6c7c8a] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors duration-300"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Select the AWS resources you need for your hackathon and generate a deployment script to get started
                  quickly.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 text-black">
              <div className="flex flex-col items-center justify-center space-y-4">
                <h3
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  AWS Resources
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 shadow-sm transition-all hover:bg-[#b0d8f5]/90 transition-colors duration-300">
                    <CpuIcon className="h-8 w-8 text-[#6c7c8a] transition-colors duration-300" />
                    <span
                      className="text-sm font-medium"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      EC2 Instances
                    </span>
                  </Card>
                  <Card className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 shadow-sm transition-all hover:bg-[#b0d8f5]/90 transition-colors duration-300">
                    <PaintBucketIcon className="h-8 w-8 text-[#6c7c8a] transition-colors duration-300" />
                    <span
                      className="text-sm font-medium"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      S3 Buckets
                    </span>
                  </Card>
                  <PopoverPrimitive.Root>
                      <PopoverPrimitive.Trigger asChild>
                        <Card className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 shadow-sm transition-all hover:bg-[#b0d8f5]/90 transition-colors duration-300 cursor-pointer">
                          <DatabaseIcon className="h-8 w-8 text-[#6c7c8a] transition-colors duration-300" />
                          <span
                            className="text-sm font-medium"
                            style={{
                              fontFamily: "'Poppins', sans-serif",
                            }}
                          >
                            RDS Databases
                          </span>
                        </Card>
                      </PopoverPrimitive.Trigger>
                      <PopoverPrimitive.Content
                        align="center"
                        sideOffset={10}
                        className="z-50 p-4 bg-white rounded-lg shadow-lg outline-none"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <PopoverPrimitive.Root>
                          <PopoverTrigger asChild>
                            <Card
                              className="flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:bg-[#b0d8f5]/90 transition-colors duration-300">
                              <DatabaseIcon className="h-8 w-8 text-[#6c7c8a] transition-colors duration-300" />
                              <span
                                className="text-sm font-medium"
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                }}
                              >
                                MySQL
                              </span>
                            </Card>
                          </PopoverTrigger>
                          </PopoverPrimitive.Root>
                          <PopoverPrimitive.Root>
                          <PopoverTrigger asChild>
                            <Card
                              className="flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:bg-[#b0d8f5]/90 transition-colors duration-300">
                              <DatabaseIcon className="h-8 w-8 text-[#6c7c8a] transition-colors duration-300" />
                              <span
                                className="text-sm font-medium"
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                }}
                              >
                                MongoDB
                              </span>
                            </Card>
                          </PopoverTrigger>
                          </PopoverPrimitive.Root>
                        </div>
                        <PopoverPrimitive.Arrow className="fill-current text-white" />
                      </PopoverPrimitive.Content>
                    </PopoverPrimitive.Root>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    className="w-full min-[400px]:w-auto text-gray-900 hover:bg-[#b0d8f5]/90 transition-colors duration-300"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    variant="outline"
                  >
                    Create Terraform Script
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <h3
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Infrastructure Diagram
                </h3>
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

function CpuIcon(props) {
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
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function PaintBucketIcon(props) {
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
      <path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
      <path d="m5 2 5 5" />
      <path d="M2 13h15" />
      <path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" />
    </svg>
  )
}


function SquareFunctionIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" />
      <path d="M9 11.2h5.7" />
    </svg>
  )
}
