/** @jsxImportSource @emotion/react */
import * as signStyle from '../style/signStyle';
import { useState, useEffect } from 'react';
import { postSignup } from '../api/Fetcher';
import { Link, useNavigate } from 'react-router-dom';

export default function Singup() {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [validError, setValidError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('Token')) {
      navigate('/todo');
    }
  }, []);

  // 이메일, 비밀번호 유효성 검사
  const handleEmailInputChange = (e) => {
    setEmailValue(() => e.target.value);
    if (!/@/.test(e.target.value) || !passwordValue) {
      setValidError(true);
    } else {
      setValidError(false);
    }
  };
  const handlePasswordInputChange = (e) => {
    setPasswordValue(() => e.target.value);
    if (e.target.value.length < 8 || !emailValue || !/@/.test(emailValue)) {
      setValidError(true);
    } else {
      setValidError(false);
    }
  };

  // 회원가입 api요청 및 리다이렉트
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: emailValue,
      password: passwordValue,
    };
    await postSignup(data);
    alert('성공적으로 가입되었습니다!\n로그인페이지로 이동합니다.');
    navigate('/signin');
  };

  return (
    <main role="main" css={signStyle.main}>
      <section css={signStyle.signSection}>
        <h1 css={signStyle.pageTitle}>회원가입</h1>
        <form onSubmit={handleSignupSubmit} css={signStyle.signForm}>
          <label htmlFor="email">이메일 주소*</label>
          <input
            type="email"
            id="email"
            data-testid="email-input"
            value={emailValue}
            onChange={handleEmailInputChange}
          />
          <label htmlFor="password">비밀번호*</label>
          <input
            type="password"
            id="password"
            data-testid="password-input"
            value={passwordValue}
            onChange={handlePasswordInputChange}
          />
          <button type="submit" data-testid="signup-button" disabled={validError}>
            회원가입
          </button>
        </form>
        <div css={signStyle.bottomLink}>
          이미 가입하셨다면? <Link to="/signin">로그인</Link>
        </div>
      </section>
    </main>
  );
}
