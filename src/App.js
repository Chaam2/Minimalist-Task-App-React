import './reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import Main from './pages/Main';
import Signin from './pages/Signin';
import Singup from './pages/Signup';
import Todo from './pages/Todo';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
