export default function Singup() {
  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <label htmlFor="email">이메일 주소*</label>
        <input type="email" id="email" data-testid="email-input" />
        <label htmlFor="password">비밀번호*</label>
        <input type="password" id="password" data-testid="password-input" minLength="8" />
        <button type="submit" data-testid="signup-button">
          회원가입
        </button>
      </form>
      <div>
        이미 가입하셨다면? <a href="/signup">로그인</a>
      </div>
    </div>
  );
}
