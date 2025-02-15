"use client";

import Header from "@/components/header/Header";
import { useRouter } from "next/navigation";

export default function GuidePage() {
  const router = useRouter();
  return (
    <div className="bg-white h-screen">
      <Header />
      <div className="max-w-2xl mx-auto p-4 space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-black">
            Onijekuje Restaurant Guides
          </h1>
        </div>

        {/* Guides List */}
        <div
          className="space-y-12 cursor-pointer"
          onClick={() =>
            router.push("/guides/jjc-guide-to-eating-out-in-lagos")
          }
        >
          {/* Passerine */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-l text-black">
                A Johnny Just Come guide to eating out in Lagos
              </h2>
              <div className="flex items-center gap-1">
                <span className="font-bold">7.9</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              If you are stuck with the pain in the arse that is finding a place
              to go eat in Lagos with time ticking away relentlessly, you are in
              the right place ...
            </p>
          </div>
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-gray-400 to-black"></div>
      </div>
    </div>
  );
}
