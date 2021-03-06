import { useState } from 'react';
import styled from 'styled-components';

export default function Modal({ open, closeModal, addItem }) {
  const [name, setName] = useState('');
  const [src, setSrc] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    addItem({ name, src, content });
    closeModal();
  }

  return (
    <BackDrop>
      <StyledDialog open={open} id="modal">
        <CloseBtn type="button" onClick={closeModal}>X</CloseBtn>
        <form onSubmit={handleSubmit}>
          <FormItem>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              required 
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="src">이미지</label>
            <input
              type="text"
              id="src"
              required
              value={src}
              onChange={e => setSrc(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="content">내용</label>
            <input
              type="text"
              id="content"
              required
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </FormItem>
          <SubmitBtn type="submit">저장</SubmitBtn>
        </form>
      </StyledDialog>
    </BackDrop>
  );
}

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0,0, 0.5);
`;

const StyledDialog = styled.dialog`
  position: relative;
  width: 400px;
  border: none;
  border-radius: 5px;
  padding: 2rem 1rem;
`;

const FormItem = styled.div`
  label {
    display: block;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  input {
    display: block;
    width: 100%;
    font-size: 1.2rem;
    padding: 0.5rem;
    border: 2px solid #7473c9;
    border-radius: 5px;
  }

  input:focus {
    outline: none !important;
    border: 2px solid #9be8d6;
  }
`;

const SubmitBtn = styled.button`
  display: block;
  width: 100%;
  font-size: 1rem;
  color: #fff;
  padding: 0.5rem 0;
  border: none;
  border-radius: 5px;
  background: #7473c9;
  margin-top: 1.5rem;
  cursor: pointer;

  :hover {
    color: #000;
    background: #9be8d6;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.2rem;
  font-weight: 800;
  background: none;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
`;
