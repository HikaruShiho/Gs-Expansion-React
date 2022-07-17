import Booklist from "./components/Booklist";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { TodoIndex } from "./pages/TodoIndex";
import { TodoToday } from "./pages/TodoToday";
import { TodoPost } from "./pages/TodoPost";
import { TestSlack } from "./pages/TestSlack";

const NotFound = () => <h2>Not Found...</h2>;

function App() {
  const getDataFromAPI = async (keyword) => {
    const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  };

  const languages = ["React", "Vue", "Angular"];

  return (
    <BrowserRouter>
      <h1>react app</h1>
      <ul>
        <li>
          <Link to="/todo/index">todo 一覧（全件）</Link>
        </li>
        <li>
          <Link to="/todo/today">todo 一覧（本日）</Link>
        </li>
        <li>
          <Link to="/todo/post">todo 入力</Link>
        </li>
        <li>
          <Link to="/test-slack">test slack</Link>
        </li>
        {/* <li>
          <Link to="/react">React</Link>
        </li>
        <li>
          <Link to="/vue">Vue</Link>
        </li>
        <li>
          <Link to="/angular">Angular</Link>
        </li> */}
      </ul>
      <Routes>
        <Route path="/todo/index" element={<TodoIndex />} />
        <Route path="/todo/today" element={<TodoToday />} />
        <Route path="/todo/post" element={<TodoPost />} />
        <Route path="/test-slack" element={<TestSlack />} />
        <Route path="/*" element={<NotFound />} />
        {/* <Route
          path="/react"
          element={
            <Booklist language={languages[0]} getData={getDataFromAPI} />
          }
        />
        <Route
          path="/vue"
          element={
            <Booklist language={languages[1]} getData={getDataFromAPI} />
          }
        />
        <Route
          path="/angular"
          element={
            <Booklist language={languages[2]} getData={getDataFromAPI} />
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
