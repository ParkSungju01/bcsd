import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="href">
            <a className="hr_login">로그인</a>
            <a className="hr_new">회원가입</a>
          </div>
          <div className="input">
            <input placeholder="아이디"></input>
            <input placeholder="비밀번호"></input>
          </div>
          <button className="btn_log">로그인</button>
        </div>
      </div>
    </>
  );
}

export default App;
