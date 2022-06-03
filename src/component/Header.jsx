import styled from 'styled-components';

const StyledHeader = styled.header`
  border: 5px solid #ff9c33;
  margin-bottom: 1rem;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff9c33;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1 className="title">고량주</h1>
    </StyledHeader>
  );
}
