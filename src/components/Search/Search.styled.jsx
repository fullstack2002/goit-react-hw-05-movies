import styled from '@emotion/styled'

export const SearchForm = styled.form`
  display: flex;
  width: 400px;
  padding: 5px;
  max-width: 500px;
  background-color: #fff;
  border: 1px solid #3131ac;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 30px;
  border: 0;
  border-radius: 2px;
  background-color: #3131ac;
  background-size: 40%;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    background-color: #2b2b93;
    color: #fff;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font-size: 18px;
  }
`;