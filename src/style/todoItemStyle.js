import color from './color';

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

export const checkbox = {};

export const todoInput = {
  flex: 1,
  border: 0,
  fontSize: 16,
  '&:focus': {
    outline: 0,
  },
};
