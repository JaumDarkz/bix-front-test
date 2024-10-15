'use client'

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Button, Input, LoginContainer, LoginForm } from './LoginComponent.styles';
import Image from 'next/image';
import { bixLogo } from '@/lib/constants';

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      login();
      router.push("/dashboard");
    } else {
      toast.warn("Invalid credentials. \n Account for test: \n User: admin \n Pass: admin");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/dashboard')
    }
  })

  return (
    <>
      <ToastContainer theme="dark" />
      <LoginContainer>
        <Image src={bixLogo} alt='Logo' width={192} style={{ filter: 'brightness(0)' }} />

        <LoginForm onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        <p style={{color: 'gray', marginTop: 15}}>User: admin</p>
        <p style={{color: 'gray'}}>Password: admin</p>
        </LoginForm>

      </LoginContainer>
    </>
  )
}

export default LoginComponent