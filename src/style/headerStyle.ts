import { css } from '@emotion/react';
import color from './color';

export const header = css({
  height: 56,
  padding: '0 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: `${color.black40}`,
  borderBottom: '1px solid #000',
});

export const logoutButton = css({
  cursor: 'pointer',
  border: 0,
  backgroundColor: `${color.white00}`,
  color: `${color.black20}`,
  fontSize: 16,
  fontFamily: 'inherit',
});

export const headerLinks = css({
  display: 'flex',
  gap: 8,
});

export const headerLink = css({
  color: `${color.black20}`,
  '&:hover': {
    color: `${color.black00}`,
    fontWeight: 500,
  },
});
