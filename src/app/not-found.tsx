import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/Button";

export default function NotFound() {
  return (
    <div className="grid h-screen w-full place-items-center">
      <div className="grid place-items-center rounded-xl border border-white p-6 text-white">
        <p className="text-center text-5xl font-semibold">Error 404</p>
        <p className="text-center text-xl">Page not found. Nothing here!</p>
        <Button asChild className="mt-3">
          <Link href="/">
            <i className="i-fa6-solid-house"></i>
            Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
