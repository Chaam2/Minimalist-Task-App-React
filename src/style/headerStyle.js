import color from './color';

export const header = {
  height: 56,
  padding: '0 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: `${color.black40}`,
  borderBottom: '1px solid #000',
};

export const logoutButton = {
  cursor: 'pointer',
  border: 0,
  backgroundColor: `${color.white00}`,
  color: `${color.black20}`,
  fontSize: 16,
  fontFamily: 'inherit',
};

export const headerLinks = {
  display: 'flex',
  gap: 8,
};

export const headerLink = {
  color: `${color.black20}`,
  '&:hover': {
    color: `${color.black00}`,
    fontWeight: 500,
  },
};
