/** @jsxImportSource @emotion/react */
import * as headerStyle from '../style/headerStyle';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authState } from '../recoil/authState';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    localStorage.removeItem('Token');
    setIsLoggedIn(false);
    navigate('/signin');
  };

  return (
    <div css={headerStyle.header}>
      {isLoggedIn ? (
        <>
          <Link to="/todo">
            <img src="/TODO_logo.png" alt="logo" />
          </Link>
          <button css={headerStyle.logoutButton} onClick={handleLogoutClick}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/">
            <img src="/TODO_logo.png" alt="logo" />
          </Link>
          <div css={headerStyle.headerLinks}>
            <Link to="/signin" css={headerStyle.headerLink}>
              Login
            </Link>
            /
            <Link to="/signup" css={headerStyle.headerLink}>
              Join
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
