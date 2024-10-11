'use client'

import { bixLogo, logoutIcon, sidebarOptions } from '@/lib/constants'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Container, Option, OptionsContainer } from './Sidebar.styles'

const Sidebar = () => {
  const router = useRouter()

  return (
    <Container>
      <div onClick={() => router.push('/dashboard')}>
        <Image width={150} src={bixLogo} alt='Logo' style={{cursor: 'pointer', filter: 'brightness(0)'}} />
      </div>

      <OptionsContainer>
        {sidebarOptions.map(({ title, route, icon }) => (
          <Option key={title}>
            <div>
              <Image src={icon} alt='Sibebar Icon' width={24} height={24} />
            </div>

            <div onClick={() => router.push(route)}>
              {title}
            </div>
          </Option>
        ))}
      </OptionsContainer>
      
      <OptionsContainer>
        <Option onClick={() => router.push('/')}>
          <div>
            <Image src={logoutIcon} alt='Sair Icon' width={24} height={24} />
          </div>

          <div>
            Sair
          </div>
        </Option>
      </OptionsContainer>
    </Container>
  )
}

export default Sidebar