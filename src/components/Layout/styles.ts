import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px 1fr;

  grid-template-areas:
    "AS MH"
    "AS CT";

  height: 100%;
  min-width: 320px;

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 80px;

    grid-template-areas:
      "MH"
      "CT";
  }
`;
