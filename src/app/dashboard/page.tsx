'use client'

import { bixLogo } from "@/lib/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage () {
  const router = useRouter()

  useEffect(() => {
    router.push('/dashboard/home')
  })

  return (
    <div>
      <Image src={bixLogo} alt="Logo" width={96} height={96} />
    </div>
  );
}
