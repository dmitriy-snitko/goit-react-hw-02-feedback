import styled from "@emotion/styled";

export const BtnContainer = styled.div`
width: 100%;
justify-content: center;
display: grid;
grid-template-columns: repeat(3, 80px);
gap: 10px;
`

export const Button = styled.button`
padding: 5px;
border: 1px solid #ccc;
border-radius: 15px;

background-color: var(--white-color);
text-transform: capitalize;

box-shadow: 0 3px 8px rgb(0 0 0 / 15%);

&:hover {
  background-color: rgba(204, 204, 204, 0.8);
  color: #fff;
}
`