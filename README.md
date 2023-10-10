# Minimalist Task App

## 실행 방법

1. git clone

```
git clone https://github.com/Chaam2/wanted-pre-onboarding-frontend.git
```

2. npm install

```
npm i
```

3. npm start

```
npm start
```

## 배포 링크

[🌐 배포 사이트 바로가기](https://minimalist-task-app-react.vercel.app/)

[<img width="100%" alt="배포사이트" src="https://github.com/Chaam2/wanted-pre-onboarding-frontend/assets/126763111/1555b4c3-012a-4b68-bf98-f2cb9adefb45">](https://minimalist-task-app-react.vercel.app/)

**테스트용 계정**
| 아이디 | chacha@mail.com|
| --- | --- |
| 패스워드 | qwer1234 |

## 주요 기능

### 유효성 검사

- 이메일 주소에 '@'가 포함되어있지 않거나, 비밀번호가 8자리 미만인 경우 버튼이 disabled 상태가 된다.

  ![유효성 검사 gif](https://github.com/Chaam2/wanted-pre-onboarding-frontend/assets/126763111/d5e65178-4b0e-4d97-afa4-593334ceb86f)

### 투두리스트

- 새로운 투두리스트를 생성할 수 있다.

  ![투두 작성](https://github.com/Chaam2/wanted-pre-onboarding-frontend/assets/126763111/c3a09727-998e-4e28-b721-153024774c25)

- 완료처리하거나 내용을 수정 및 삭제할 수 있다.

  ![수정 삭제](https://github.com/Chaam2/wanted-pre-onboarding-frontend/assets/126763111/f40dec5c-80b9-4410-9c2f-915414eeae39)

### 리다이렉트

- 로그인 하지 않은 유저가 /todo 페이지에 접근하면 로그인 페이지로 리다이렉트 된다.
- 이미 로그인 한 유저가 /signin 또는 /signup페이지에 접근 시 /todo 페이지로 리다이렉트 된다.
