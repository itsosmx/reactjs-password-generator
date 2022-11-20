import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
  position: relative;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  min-width: 300px;
  gap: 1rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--gray);
`
export const DisplayBox = styled.div`
  width: 100%;
  background-color: var(--primary-light);
  border-radius: 5px;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.5rem;
  }
`

export const Options = styled.div`
  width: 100%;
  background-color: var(--primary-light);
  border-radius: 5px;
  padding: .5rem 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: .5rem;
  flex-direction: column;
  word-spacing: .3rem;
`

export const Strength = styled.div`
  width: 100%;
  background-color: var(--primary);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--gray);
  }
`
export const StrengthBar = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  gap: .5rem;
`

export const StrengthPoint = styled.div`
  height: 100%;
  border: 2px solid var(--secondary);
  padding: .3rem;
  background-color: ${(props) => props.checked && "var(--secondary)"} ;
`