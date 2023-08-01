export default function Signin() {
  return (
    <div>
      <h1>로그인</h1>
      <form>
        <label htmlFor="email">이메일 주소*</label>
        <input type="email" id="email" data-testid="email-input" />
        <label htmlFor="password">비밀번호*</label>
        <input type="password" id="password" data-testid="password-input" minLength="8" />
        <button type="submit" data-testid="signin-button">
          로그인
        </button>
      </form>
      <div>
        아직 계정이 없다면? <a href="/signup">회원가입</a>
      </div>
    </div>
  );
}