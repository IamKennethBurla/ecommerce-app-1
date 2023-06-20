import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CommonCoreProps {}

const StyledCommonCore = styled.div`
  color: pink;
`;

export function CommonCore(props: CommonCoreProps) {
  return (
    <StyledCommonCore>
      <h1>Welcome to CommonCore!</h1>
    </StyledCommonCore>
  );
}

export default CommonCore;
