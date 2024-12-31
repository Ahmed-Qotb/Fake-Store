"use client";

import { usePathname } from "next/navigation";
import React from "react";
import HeadingTitleBg from "@/assets/images/main-bg-guts.png";

function HeadingTitle() {
  const pathName: string = usePathname();

  const isProductDetailsPage = pathName.startsWith("/products/");

  const title: string = pathName.substring(1);

  return (
    <>
      {pathName === "/" || isProductDetailsPage ? "" : 
        <div className="heading-title text-center w-[100%] py-11 p-5">
          <h2 className="text-4xl font-bold text-white my-5">{title}</h2>
        </div>
      }
    </>
  );
}

export default HeadingTitle;
