import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  outline: solid 2px #E2E4E4;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const Title = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`

export const FieldContainer = styled.div`
  width: 45%;
  min-width: 140px;
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  justify-content: center;
`

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 10px;
`;

export const DatePickerStyled = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.375rem;
    border: 1px solid #cbd5e0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    outline: none;
    font-size: 1rem;
    background-color: white;
    color: black;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #cbd5e0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  outline: none;
  font-size: 1rem;
  background-color: white;
  padding-right: 25px;
  color: black;

  option:disabled {
    color: #a0aec0;
  }
`;