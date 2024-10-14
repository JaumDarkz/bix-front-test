'use client'

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAuth } from "@/contexts/AuthContext";
import { FilterProvider } from "@/contexts/FilterContext";
import { transactionsData } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()

  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  })

  return (
    <FilterProvider transactions={transactionsData}>
      <Container>
        <Sidebar />
        <NavbarContainer>
          <Navbar />
          <ContentContainer>{children}</ContentContainer>
        </NavbarContainer>
      </Container>
    </FilterProvider>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 200px;
`

const ContentContainer = styled.div`
  padding: 50px 0 0 0;
`
