export default function Todo() {
  return (
    <div>
      <img
        width={200}
        src="https://source.unsplash.com/random/?grayscale"
        alt="메인 비주얼 이미지"
      />
      <ul>
        <li>To-do list</li>
        <li>
          <input type="checkbox" />
          투두예시
          <button>✏️</button>
          <button>🗑️</button>
        </li>
        <li>
          <input type="checkbox" />
          수정모드
          <button>✅</button>
          <button>❎</button>
        </li>
      </ul>
      <form>
        <input type="text" placeholder="+ Add to-do" required />
        <button>OK</button>
      </form>
    </div>
  );
}
