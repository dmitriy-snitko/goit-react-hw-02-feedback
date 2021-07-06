import styled from "@emotion/styled";

export const List = styled.ul`
display: grid;
grid-template-columns: repeat(5, 1fr);
margin: 0 auto;
list-style: none;
`

export const Item = styled.li`
display: flex;
align-items: center;
justify-content: center;

&:not(:last-child) {
  margin-right: 5px;
}
`

export const Text = styled.p``
