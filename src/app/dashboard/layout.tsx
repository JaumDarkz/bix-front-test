// src/app/dashboard/layout.tsx
'use client';

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAuth } from "@/contexts/AuthContext";
import { FilterProvider } from "@/contexts/FilterContext";
import { transactionsData } from "@/lib/constants"; // Ensure this points to your JSON file
import { Transaction } from '@/lib/dto';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

// Ensure Type Assertion
const typedTransactionsData: Transaction[] = transactionsData as Transaction[];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <FilterProvider transactions={typedTransactionsData}>
      <Container>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <NavbarContainer isOpen={isOpen}>
          <Navbar toggleSidebar={toggleSidebar} />
          <ContentContainer>{children}</ContentContainer>
        </NavbarContainer>
      </Container>
    </FilterProvider>
  );
}

interface NavbarContainerProps {
  isOpen: boolean;
}

const NavbarContainer = styled.div<NavbarContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  padding-left: ${({ isOpen }) => (isOpen ? '200px' : '0px')};

  @media (min-width: 768px) {
    padding-left: 200px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ContentContainer = styled.div`
  padding: 50px 0 0 0;
`;
