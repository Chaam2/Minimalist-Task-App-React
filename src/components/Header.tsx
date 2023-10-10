/** @jsxImportSource @emotion/react */
import * as headerStyle from '../style/headerStyle';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    localStorage.removeItem('Token');
    navigate('/signin');
  };

  return (
    <div css={headerStyle.header}>
      {localStorage.getItem('Token') ? (
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
