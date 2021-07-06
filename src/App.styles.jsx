import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  padding: 20px;

  background-color: var(--main-bg-color);
`
export const FeedbackContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2 1fr);
  gap: 25px;

  width: 700px;
  margin: 0 auto;
`