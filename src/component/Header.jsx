import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <Title>고량주</Title>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  border: 5px solid #ff9c33;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff9c33;
`;
