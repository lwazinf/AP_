'use client'

import Hero_ from "./components/Hero_";

export default function Home() {
  return (
    <div className={`w-full min-h-screen flex flex-col justify-start items-center`}>
      <Hero_ />
    </div>
  );
}