import styled from 'styled-components';

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.slate300};
`;

export default ComponentWrapper;
