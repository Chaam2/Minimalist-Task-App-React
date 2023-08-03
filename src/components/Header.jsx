/** @jsxImportSource @emotion/react */
import * as headerStyle from '../style/headerStyle';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div css={headerStyle.header}>
      <Link to="/todo">
        <img src="/TODO_logo.png" alt="logo" />
      </Link>
      <div css={headerStyle.headerLinks}>
        <Link to="/signin" css={headerStyle.headerLink}>
          로그인
        </Link>
        /
        <Link to="/signup" css={headerStyle.headerLink}>
          회원가입
        </Link>
      </div>
    </div>
  );
}
