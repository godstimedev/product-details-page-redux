import styled from 'styled-components';

export const CartCon = styled.div`
  width: 35%;
  height: 230px;
  padding: 2rem 1rem;
  background-color: white;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 720px) {
    width: 95%;
  }
  p {
    font-weight: 600;
    font-size: 0.9rem;
  }
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    img:nth-child(1) {
      width: 60px;
      border-radius: 5px;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: hsl(219, 9%, 45%);
      font-size: 0.9rem;
      div {
        display: flex;
        flex-direction: row;
        gap: 0.2rem;
        div:nth-child(3) {
          font-weight: 700;
        }
      }
    }
    img:nth-child(2) {
    }
  }
  button {
    font-family: 'Kumbh Sans';
    font-weight: 500;
    font-size: 0.9rem;
    padding: 1rem 5.5rem;
    background: hsl(26, 100%, 55%);
    border-radius: 10px;
    color: white;
    width: 100%;
  }
`;
