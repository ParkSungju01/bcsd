import "./new.css";
function New() {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="href">
            <a className="hr_login">로그인</a>
            <a className="hr_new">회원가입</a>
          </div>
          <div className="input">
            <input placeholder="아이디를 입력하세요"></input>
            <input placeholder="비밀번호를 입력하세요"></input>
            <input placeholder="비밀번호를 재입력하세요"></input>
            <input placeholder="학번을 입력하세요"></input>
            <input placeholder="전공"></input>
            <input placeholder="전화번호"></input>
          </div>
          <button className="btn_log">로그인</button>
        </div>
      </div>
    </>
  );
}
