import styled from 'styled-components';

export const ModalCon = styled.div`
  width: 80vw;
  max-width: 400px;
  position: relative;
  .close {
    position: absolute;
    right: -5px;
    top: -2.5rem;
    cursor: pointer;
    .icon {
      color: white;
    }
    .icon:hover {
      color: hsl(26, 100%, 55%);
    }
  }
  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    .cont {
      width: 100%;
      .card--con {
        > img {
          width: fit-content;
          border-radius: 10px;
          margin: auto;
        }
      }
      .slick-slider > .slick-dots > li:hover {
        opacity: 0.7;
      }
      .slick-slider > .slick-dots > .slick-active > a > img {
        /* opacity: 0.3; */
        background-color: white;
        background-blend-mode: lighten;
        border: 2px solid hsl(26, 100%, 55%);
      }
    }
  }
`;
