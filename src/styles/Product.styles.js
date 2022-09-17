import styled from 'styled-components';

export const ProductCon = styled.div`
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 1rem auto;
  padding: 1rem 3rem;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    margin: auto;
    padding: 0;
    /* gap: 6rem; */
  }
  .left {
    width: 50%;

    @media screen and (max-width: 720px) {
      width: 100%;
      height: 50%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 720px) {
      padding: 0 2rem;
      margin-bottom: 3rem;
    }
    .p1 {
      text-transform: uppercase;
      color: hsl(26, 100%, 55%);
      font-weight: 700;
      font-size: 14px;
    }
    h1 {
      font-weight: 700;
      font-size: 36px;
      margin-bottom: 1rem;
    }
    .p2 {
      color: hsl(219, 9%, 45%);
      margin-bottom: 1rem;
    }
    .prices {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
      @media screen and (max-width: 720px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
      }
      .price {
        display: flex;
        align-items: center;
        gap: 1rem;
        h3 {
          font-size: 28px;
          font-weight: 700;
        }
        span {
          background: hsl(223, 64%, 98%);
          color: hsl(26, 100%, 55%);
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 3px;
        }
      }
      small {
        color: hsl(219, 9%, 45%);
        text-decoration: line-through;
      }
    }
    .counter {
      display: flex;
      align-items: center;
      gap: 1rem;
      @media screen and (max-width: 720px) {
        flex-direction: column;
        width: 100%;
      }
      .count {
        background: hsl(223, 64%, 98%);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 70%;
        @media screen and (max-width: 720px) {
          justify-content: space-between;
          width: 100%;
        }
        span:nth-child(1) {
          color: hsl(26, 100%, 55%);
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          padding: 10px 10px;
          /* height: 100%; */
        }
        span:nth-child(2) {
          /* color: hsl(26, 100%, 55%); */
          font-size: 20px;
          font-weight: 700;
          padding: 10px 10px;
          /* height: 100%; */
        }
        span:nth-child(3) {
          color: hsl(26, 100%, 55%);
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          padding: 10px 10px;
          /* height: 100%; */
        }
      }
      .button {
        width: 100%;
        button {
          font-family: 'Kumbh Sans';
          font-weight: 500;
          font-size: 0.9rem;
          padding: 1rem auto;
          width: 100%;
          height: 3rem;
          background: hsl(26, 100%, 55%);
          border-radius: 10px;
          color: white;
        }
      }
    }
  }
`;
