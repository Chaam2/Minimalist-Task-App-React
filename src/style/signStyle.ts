import { css } from '@emotion/react';
import color from './color';

export const main = css({
  width: '100vw',
  height: `calc(100vh - 57px)`,
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
});

export const signSection = css({
  gridColumn: '2/4',
  borderLeft: `1px solid ${color.black00}`,
  borderRight: `1px solid ${color.black00}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const pageTitle = css({
  fontFamily: 'PerihelionCondBB, Helvetica',
  fontSize: 22,
  fontWeight: 'bold',
  padding: '4.5rem 0',
});

export const signForm = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '60%',
  gap: 8,

  '& label': {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: `${color.black20}`,
  },
  '& input': {
    width: '90%',
    border: `lpx solid ${color.black00}`,
    backgroundColor: `${color.white00}`,
    fontSize: 14,
    padding: 16,
    marginBottom: 8,
    '&:focus': {
      outline: 0,
    },
  },
  '& button': {
    cursor: 'pointer',
    width: '100%',
    backgroundColor: `${color.black00}`,
    color: `${color.white00}`,
    border: 0,
    fontSize: 14,
    padding: 16,
    margin: 8,
    '&:hover': {
      backgroundColor: `${color.black10}`,
    },
    '&:disabled': {
      cursor: 'unset',
      backgroundColor: `${color.black40}`,
    },
  },
});

export const bottomLink = css({
  fontSize: 14,
  marginTop: 8,
  '& a': {
    color: `${color.black00}`,
    textDecoration: 'underline',
    '&:hover': {
      color: `${color.black20}`,
    },
  },
});
