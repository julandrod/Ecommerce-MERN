import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  padding: 2rem;
  .img-container {
    flex: 2;
    display: flex;
    justify-content: center;
    img {
      max-width: 50vw;
      max-height: 600px;
      object-fit: cover;
    }
  }
  .info-container {
    flex: 1;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    .company-title {
      margin: 2rem 0 0.5rem 0;
    }
    .title {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }
    .category {
      padding: 0;
      color: var(--grey-800);
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
    .price {
      color: var(--red-dark);
      font-size: 24px;
      font-weight: bold;
    }
    .description {
      text-align: justify;
      line-height: 1.5rem;
    }
    .filter-container {
      margin: 0.5rem 0;
      display: flex;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
      .filter {
        display: flex;
        flex: 1;
        align-items: center;
        h3{
          padding-right: 0.6rem;
        }
        .filter-size {
          margin-left: 0.5rem;
          padding: 0.2rem;
        }
      }
    }
    
    .add-container {
      display: flex;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
      padding-top: 2rem;
      .amount-container {
        display: flex;
        align-items: center;
        font-weight: 700;
        flex: 1;
        svg {
          cursor: pointer;
        }
        .amount {
          width: 30px;
          height: 30px;
          font-size: 24px;
          border-radius: 10px;
          border: 1px solid var(--grey-500);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0.2rem;
        }
        .btn {
          flex: 1;
        }
      }
    }
  }
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin: 0 0.2rem;
  border: 1px solid black;
  cursor: pointer;
  transform: scale(${({ active }) => (active ? 1.3 : 1)});
  
`;

export { Wrapper, FilterColor };
