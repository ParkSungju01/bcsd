import "./new.css";
import { useNavigate } from "react-router-dom";
export default function New() {
  const navigate = useNavigate();
  return (
    <>
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
            <input placeholder="아이디를 입력하세요" className="write"></input>
            <input
              placeholder="비밀번호를 입력하세요"
              className="write"
            ></input>
            <input
              placeholder="비밀번호를 재입력하세요"
              className="write"
            ></input>
            <input placeholder="학번을 입력하세요" className="write"></input>
            <input placeholder="전공" className="write"></input>
            <input placeholder="전화번호" className="write"></input>
          </div>
          <button className="btn_log">회원가입</button>
        </div>
      </div>
    </>
  );
}
