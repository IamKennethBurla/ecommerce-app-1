import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CommonComponentsProps {}

const StyledCommonComponents = styled.div`
  color: pink;
`;

export function CommonComponents(props: CommonComponentsProps) {
  return (
    <StyledCommonComponents>
      <h1>Welcome to CommonComponents!</h1>
    </StyledCommonComponents>
  );
}

export default CommonComponents;
