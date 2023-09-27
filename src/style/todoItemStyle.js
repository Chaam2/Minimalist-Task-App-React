import { css } from '@emotion/react';
import styled from '@emotion/styled';
import color from './color';

export const todoLi = css({
  padding: 16,
  borderBottom: `1px solid ${color.black00}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 4,
  '& button': {
    cursor: 'pointer',
    backgroundColor: `${color.white00}`,
    border: 0,
    width: 24,
    height: 24,
  },
});
export const editModeLi = css({
  borderTop: `3px solid ${color.black00}`,
  borderBottom: `3px solid ${color.black00}`,
  position: 'relative',
  bottom: 2,
});

export const checkbox = css({
  display: 'none',
});

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

export const TodoInput = styled.input`
  flex: 1;
  border: 0;
  font-size: 16px;
  font-style: ${({ checked }) => (checked ? 'italic' : '')};
  text-decoration: ${({ checked }) => (checked ? 'line-through' : '')};
  text-decoration-color: ${color.black40};
  color: ${({ checked }) => (checked ? `${color.black20}` : `${color.black00}`)};

  &:focus {
    outline: 0;
  }
`;
