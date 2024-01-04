import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main_page";
import New from "./New";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/1" element={<New />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
