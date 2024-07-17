"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { AnimatedTooltip } from "./AnimatedTooltip";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { PinPerspective } from "./3dPin";

export function SimpleCard({
  link,
  title,
  des,
  image,
  iconLists,
}: {
  link: string;
  title: string;
  des: string;
  image: string;
  iconLists: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) {
  return (
    <Card>
      <CardImg image={image} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{des}</CardDescription>
      <CardFooter>
        <div className="flex items-center">
          <AnimatedTooltip items={iconLists} />
        </div>

        <Link href={link}>
          <div className="flex justify-center items-center">
            <p className="flex text-sm text-green">Check Live Site</p>
            <FaLocationArrow className="ms-3 text-sm" color="#22a6b3" />
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-6 rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardImg = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => {
  return (
    // <div
    //   className={cn(
    //     "relative flex justify-center items-center sm:w-96 w-[80vw] overflow-hidden lg:h-[40vh] h-[30vh]",
    //     className
    //   )}
    // >
    <div className="relative w-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
      <img src={image} alt={image} className="" />
    </div>
    // </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("flex items-center justify-between mt-7 mb-3", className)}
    >
      {children}
    </div>
  );
};
