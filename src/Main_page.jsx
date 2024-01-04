import { useNavigate } from "react-router-dom";
import "./Main_page.css";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="box">
        <div className="href">
          <a
            className="hr_login"
            onClick={() => {
              navigate("/");
            }}
          >
            로그인
          </a>
          <a
            className="hr_new"
            onClick={() => {
              navigate("/1");
            }}
          >
            회원가입
          </a>
        </div>
        <div className="input">
          <input placeholder="아이디" className="write"></input>
          <input placeholder="비밀번호" className="write"></input>
        </div>
        <button className="btn_log">로그인</button>
      </div>
    </div>
  );
}
