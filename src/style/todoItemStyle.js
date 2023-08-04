import color from './color';
import styled from '@emotion/styled';

export const todoLi = {
  padding: 16,
  borderBottom: `1px solid ${color.black00}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 4,
  '& button': {
    backgroundColor: `${color.white00}`,
    border: 0,
    width: 24,
    height: 24,
  },
};
export const editModeLi = {
  borderTop: `3px solid ${color.black00}`,
  borderBottom: `3px solid ${color.black00}`,
  position: 'relative',
  bottom: 2,
};

export const checkbox = {
  display: 'none',
};

export const CheckboxLabel = styled.label`
  width: 16px;
  height: 16px;
  border: 1px solid ${color.black00};
  background-image: url(${({ checked }) => (checked ? '/check.png' : '')});
  background-size: 13px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ checked }) => (checked ? `${color.main}` : '')};
`;

export const todoInput = {
  flex: 1,
  border: 0,
  fontSize: 16,
  '&:focus': {
    outline: 0,
  },
};
