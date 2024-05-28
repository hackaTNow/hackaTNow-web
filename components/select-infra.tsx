import { Button } from "@/components/ui/button";
import { Header } from "./ui/header";
import { Footer } from "./ui/footer";
import { Card } from "./ui/card";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import React, { useEffect, useState } from "react";

const PopoverTrigger = PopoverPrimitive.Trigger;

export function SelectInfra() {
  const [ec2Selected, setEc2Selected] = useState(false);
  const [s3Selected, setS3Selected] = useState(false);
  const [mysqlSelected, setMysqlSelected] = useState(false);
  const [mongoDBSelected, setMongoDBSelected] = useState(false);
  const [rdsSelected, setRdsSelected] = useState(false);
  const [ecrSelected, setECRSelected] = useState(false);

  const handleEc2Click = () => {
    setEc2Selected((prevClicked) => !prevClicked);
  };

  const handleS3Click = () => {
    setS3Selected((prevClicked) => !prevClicked);
  };

  const handleMysqlSelect = () => {
    setMysqlSelected((prev) => !prev);
    if (!mysqlSelected) {
      setMongoDBSelected(false);
      setRdsSelected(true);
    }

    if (mysqlSelected) {
      setRdsSelected(false);
    }
  };

  const handleMongoDBSelect = () => {
    setMongoDBSelected((prev) => !prev);
    if (!mongoDBSelected) {
      setMysqlSelected(false);
      setRdsSelected(true);
    }

    if (mongoDBSelected) {
      setRdsSelected(false);
    }
  };

  const handleRDSClick = () => {
    if (mysqlSelected || mongoDBSelected) {
      setRdsSelected(true);
    } else {
      setRdsSelected(false);
    }
  };

  const handleECRClick = () => {
    setECRSelected((prevClicked) => !prevClicked);
  };

  const [selectedResources, setSelectedResources] = useState<string[]>([]);

  useEffect(() => {
    // Handle resource selection
    // Add or remove selected resources from the state
    setSelectedResources(
      [
        rdsSelected && "RDS",
        ec2Selected && "EC2",
        s3Selected && "S3",
        ecrSelected && "ECR",
        // Add more selected resources here as needed
      ].filter(Boolean) as string[]
    );
  }, [rdsSelected, ec2Selected, s3Selected, ecrSelected]);

  // Define a function to render the infrastructure diagram based on selected resources
  const renderInfrastructureDiagram = () => {
    switch (selectedResources.length) {
      case 1:
        switch (selectedResources[0]) {
          case "RDS":
            return "/RDS.png";
          case "EC2":
            return "/EC2.png";
          case "S3":
            return "/S3.png";
          case "ECR":
            return "/ECR.png";
        }
      case 2:
        if (
          selectedResources.includes("RDS") &&
          selectedResources.includes("EC2")
        ) {
          return "/EC2_RDS.png";
        } else if (
          selectedResources.includes("RDS") &&
          selectedResources.includes("S3")
        ) {
          return "/RDS_S3.png";
        } else if (
          selectedResources.includes("EC2") &&
          selectedResources.includes("S3")
        ) {
          return "/EC2_S3.png";
        } else if (
          selectedResources.includes("RDS") &&
          selectedResources.includes("ECR")
        ) {
          return "/RDS_ECR.png"; // Added case for RDS and ECR
        } else if (
          selectedResources.includes("EC2") &&
          selectedResources.includes("ECR")
        ) {
          return "/EC2_ECR.png"; // Added case for EC2 and ECR
        } else if (
          selectedResources.includes("S3") &&
          selectedResources.includes("ECR")
        ) {
          return "/S3_ECR.png"; // Added case for S3 and ECR
        }
      case 3:
        // If all three resources are selected
        if (
          selectedResources.includes("RDS") &&
          selectedResources.includes("EC2") &&
          selectedResources.includes("S3")
        ) {
          return "/EC2_RDS_S3.png";
        }
        // Additional cases for when ECR is selected along with two other resources
        if (
          selectedResources.includes("RDS") &&
          selectedResources.includes("EC2") &&
          selectedResources.includes("ECR")
        ) {
          return "/EC2_RDS_ECR.png";
        }
        if (
          selectedResources.includes("RDS") &&
          selectedResources.includes("S3") &&
          selectedResources.includes("ECR")
        ) {
          return "/RDS_ECR_S3.png";
        }
        if (
          selectedResources.includes("EC2") &&
          selectedResources.includes("S3") &&
          selectedResources.includes("ECR")
        ) {
          return "/EC2_ECR_S3.png";
        }
      case 4:
        return "/EC2_RDS_ECR_S3.png";
      default:
        return "/PLACE_HOLDER.png";
    }
  };
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
                    Select the AWS resources you need for your hackathon and
                    generate a deployment script to get started quickly.
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
                    <Card
                      className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 p-4 shadow-sm hover:bg-[#b0d8f5]/90 transition-all ${
                        ec2Selected ? "bg-[#b0d8f5]/90" : ""
                      } transition-colors duration-300`}
                      onClick={handleEc2Click}
                    >
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
                    <Card
                      className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 p-4 shadow-sm hover:bg-[#b0d8f5]/90 transition-all ${
                        s3Selected ? "bg-[#b0d8f5]/90" : ""
                      } transition-colors duration-300`}
                      onClick={handleS3Click}
                    >
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
                        <Card
                          className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 p-4 shadow-sm hover:bg-[#b0d8f5]/90 transition-all ${
                            rdsSelected ? "bg-[#b0d8f5]/90" : ""
                          } transition-colors duration-300`}
                          onClick={handleRDSClick}
                        >
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
                        onClick={(e) => e.stopPropagation()} // 클릭 이벤트 전파
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <PopoverPrimitive.Root>
                            <PopoverTrigger asChild>
                              <Card
                                className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 p-4 shadow-sm transition-all ${
                                  mysqlSelected ? "bg-[#b0d8f5]/90" : ""
                                } transition-colors duration-300`}
                                onClick={handleMysqlSelect}
                              >
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
                                className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 p-4 shadow-sm transition-all ${
                                  mongoDBSelected ? "bg-[#b0d8f5]/90" : ""
                                } transition-colors duration-300`}
                                onClick={handleMongoDBSelect}
                              >
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
                    <Card
                      className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 p-4 shadow-sm hover:bg-[#b0d8f5]/90 transition-all ${
                        ecrSelected ? "bg-[#b0d8f5]/90" : ""
                      } transition-colors duration-300`}
                      onClick={handleECRClick}
                    >
                      <ContainerIcon className="h-8 w-8 text-[#6c7c8a] transition-colors duration-300" />
                      <span
                        className="text-sm font-medium"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        ECR
                      </span>
                    </Card>
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
                    src={renderInfrastructureDiagram()} // Use the
                    width="550"
                    style={
                      { objectFit: "contain" }
                    }
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

function CpuIcon(props: React.SVGProps<SVGSVGElement>) {
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
  );
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
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
  );
}

function PaintBucketIcon(props: React.SVGProps<SVGSVGElement>) {
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
  );
}

function ContainerIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
      <path d="M10 21.9V14L2.1 9.1" />
      <path d="m10 14 11.9-6.9" />
      <path d="M14 19.8v-8.1" />
      <path d="M18 17.5V9.4" />
    </svg>
  );
}
