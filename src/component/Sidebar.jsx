import styled from 'styled-components';

const StyledAside = styled.aside`
  min-width: 120px;
  border: 5px solid #5ac766;
  padding: 0.5rem;
  margin-right: 1rem;

  .alcohol-list {
    list-style: none;
    color: #5ac766;
    font-size: 1.5rem;
    padding-left: 0;
  }
`;

const AddBtn = styled.button`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: #5ac766;
  border: 2px solid #5ac766;
  border-radius: 5px;
  padding: 0.2rem 0;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    color: #5ac766;
    background: none;
    border: 2px solid #5ac766;
  }
`;

export default function SideBar({ openModal, alcohols }) {
  return (
    <StyledAside>
      <AddBtn type="button" onClick={() => openModal()}>추가</AddBtn>
      <ul className="alcohol-list">
        {alcohols.map(alcohol => <li key={alcohol.src}>{alcohol.alt}</li>)}
      </ul>
    </StyledAside>
  );
}
