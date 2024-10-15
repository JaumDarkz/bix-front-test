import { bixLogo, logoutIcon, sidebarOptions } from '@/lib/constants';
import Image from 'next/image';
import { useRouter as useNavRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Container, Option, OptionsContainer, CloseButton } from './Sidebar.styles';
import { useAuth } from '@/contexts/AuthContext';

export interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navRouter = useNavRouter();
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <Container toggleSidebar={() => null} isOpen={isOpen}>
      <CloseButton onClick={toggleSidebar}>×</CloseButton>
      <div onClick={() => navRouter.push('/dashboard')}>
        <Image width={150} src={bixLogo} alt='Logo' style={{ cursor: 'pointer', filter: 'brightness(0)' }} />
      </div>

      <OptionsContainer>
        {sidebarOptions.map(({ title, route, icon }) => {
          const isActive = pathname === route;

          return (
            <Option 
              key={title} 
              style={{ backgroundColor: isActive ? 'black' : 'white', color: isActive ? 'white' : 'black' }} 
              onClick={() => navRouter.push(route)}
            >
              <div>
                <Image style={isActive ? { filter: 'invert()' }: undefined} src={icon} alt='Sidebar Icon' width={24} height={24} />
              </div>

              <div>
                {title}
              </div>
            </Option>
          );
        })}
      </OptionsContainer>

      <OptionsContainer>
        <Option onClick={() => logout()}>
          <div>
            <Image src={logoutIcon} alt='Sair Icon' width={24} height={24} />
          </div>

          <div>
            Logout
          </div>
        </Option>
      </OptionsContainer>
    </Container>
  );
};

export default Sidebar;
