/** @jsxImportSource @emotion/react */

export default function Header() {
  return (
    <div css={header}>
      <img src="/TODO_logo.png" alt="logo" />
      <div css={headerLinks}>
        <a css={headerLink} href="/signin">
          로그인
        </a>
        /
        <a css={headerLink} href="/signup">
          회원가입
        </a>
      </div>
    </div>
  );
}

// css 스타일링

const header = {
  height: 56,
  padding: '0 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#00000055',
  borderBottom: '1px solid #000',
};

const headerLinks = {
  display: 'flex',
  gap: '8px',
};

const headerLink = {
  color: '#00000099',
  '&:hover': {
    color: '#000',
    fontWeight: 500,
  },
};
