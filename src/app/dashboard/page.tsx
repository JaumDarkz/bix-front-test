'use client'

import { bixLogo } from "@/lib/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export default function DashboardPage () {
  const router = useRouter()

  
    router.push('/dashboard/home')


  return (
    <Container>
      <Image src={bixLogo} alt='Logo' width={300} style={{ filter: 'brightness(0)' }} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`