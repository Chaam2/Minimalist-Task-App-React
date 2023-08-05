/** @jsxImportSource @emotion/react */
import * as signStyle from '../style/signStyle';
import { useEffect, useState } from 'react';
import { postSignin } from '../api/Fetcher';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('Token')) {
      navigate('/todo');
    }
  }, []);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [validError, setValidError] = useState(false);

  // 이메일, 비밀번호 유효성 검사
  const handleEmailInputChange = (e) => {
    setEmailValue(() => e.target.value);
    if (!/@/.test(e.target.value) || !passwordValue || passwordValue.length < 8) {
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

  // 로그인 api요청 및 리다이렉트
  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: emailValue,
      password: passwordValue,
    };
    try {
      const response = await postSignin(data);
      localStorage.setItem('Token', response.access_token);
      navigate('/todo');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main role="main" css={signStyle.main}>
      <section css={signStyle.signSection}>
        <h1 css={signStyle.pageTitle}>로그인</h1>
        <form onSubmit={handleSigninSubmit} css={signStyle.signForm}>
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
          <button type="submit" data-testid="signin-button" disabled={validError}>
            로그인
          </button>
        </form>
        <div css={signStyle.bottomLink}>
          아직 계정이 없다면? <Link to="/signup">회원가입</Link>
        </div>
      </section>
    </main>
  );
}
