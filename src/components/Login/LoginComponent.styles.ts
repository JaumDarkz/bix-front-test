import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

export const LoginForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  border: 2px solid #d7d8d8;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  outline: none;
  color: black;
  font-family: 'Montserrat' sans-serif;
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
  font-family: 'Montserrat' sans-serif;

  border-radius: 4px;
  font-size: 1rem;

  transition: 0.5s;

  &:hover {
    background-color: white;
    color: black;
    outline: 1px solid black;
  }
`;
