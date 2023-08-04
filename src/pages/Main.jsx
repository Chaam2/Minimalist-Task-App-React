/** @jsxImportSource @emotion/react */
import * as todoStyle from '../style/todoStyle';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <Link to="/signin" role="main" css={todoStyle.main}>
      <section css={todoStyle.imgSection}>
        <img
          css={todoStyle.mainImg}
          src="https://source.unsplash.com/random/?grayscale"
          alt="메인 비주얼 이미지"
        />
      </section>
      <section css={todoStyle.todoSection}>
        <ul css={todoStyle.todoListUl}>
          <li className="listTitle">To-do list</li>
          <li className="listSample">로그인 후 이용하실 수 있습니다.</li>
        </ul>
        <form css={todoStyle.createForm}>
          <input className="createInput" type="text" placeholder="+ Add to-do" readOnly />
          <button className="createButton" disabled>
            Add
          </button>
        </form>
      </section>
    </Link>
  );
}
