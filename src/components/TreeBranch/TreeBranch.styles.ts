import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div.space-left {
    margin-left: 2rem;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #e9e9e9;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 2px solid blue;

  label {
    color: blue;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 500;
  }

  input {
    position: absolute;
    left: 16px;
    top: 22px;
    opacity: 0;
    width: 0;
    height: 0;
  }

  button {
    cursor: pointer;
    margin-left: 0.3rem;
    border: none;
    background: none;

    &::before {
      font-family: 'Font Awesome 5 Free';
      content: '\f054';
      font-weight: 600;
      color: blue;
    }

    &.show-branches {
      transform: rotate(90deg);
    }
  }
`

export const CustomCheckbox = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border-radius: 0.25rem;
    border: 2px solid blue;
    left: -1.35rem;
    background-color: white;
    cursor: pointer;
    margin-right: 0.5rem;

    &.indeterminated {
      &::before {
        font-family: 'Font Awesome 5 Free';
        content: '\f068';
        font-weight: 600;
        color: gray;
        font-size: 0.8rem;
      }
    }

    &.checked {
      &::before {
        font-family: 'Font Awesome 5 Free';
        content: '\f00c';
        font-weight: 600;
        color: blue;
        font-size: 0.8rem;
      }
    }
`;