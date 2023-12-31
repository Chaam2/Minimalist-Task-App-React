import { css } from '@emotion/react';
import color from './color';

export const main = css({
  display: 'grid',
  gridTemplateColumns: `repeat(8,1fr)`,
  width: '100vw',
  height: `calc(100vh - 57px)`,
  color: `${color.black00}`,
});

export const imgSection = css({
  gridColumn: '1/6',
  overflow: 'hidden',
});

export const mainImg = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const todoSection = css({
  gridColumn: '6/9',
  display: 'grid',
  gridTemplateRows: `repeat(8,1fr)`,
  borderLeft: `1px solid ${color.black00}`,
  overflow: 'auto',
});

export const todoListUl = css({
  gridRow: '1/8',
  borderBottom: `1px solid ${color.black00}`,
  overflow: 'auto',

  '& >li: nth-of-type(2)': {
    marginTop: 49,
  },

  '& .listTitle': {
    backgroundColor: `${color.main}`,
    padding: 16,
    position: 'fixed',
    width: '100%',
    borderBottom: `1px solid ${color.black00}`,
    fontWeight: 'bold',
    zIndex: 1,
  },
  '& .listSample': {
    padding: 16,
    borderBottom: `1px solid ${color.black00}`,
  },
});

export const createForm = css({
  gridRow: '8/9',
  display: 'flex',

  '& .createInput': {
    flex: 1,
    padding: 16,
    border: 0,
    fontSize: 16,
    '&:focus': {
      outline: 0,
    },
  },

  '& .createButton': {
    cursor: 'pointer',
    border: 0,
    padding: 0,
    borderLeft: `1px solid ${color.black00}`,
    aspectRatio: '1/1',
    fontSize: 20,
    fontFamily: 'PerihelionCondBB',
    backgroundColor: `${color.black00}`,
    color: `${color.white00}`,
    '&:hover': {
      backgroundColor: `${color.black10}`,
    },
  },
});
