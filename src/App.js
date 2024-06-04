import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import LoginOne from "./components/LoginOne";
import LoginTwo from "./components/LoginTwo";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
        <Routes>
          <Route path="/login" element={ <Login />}/>
        </Routes>
        <Routes>
          <Route path="/login-1" element={ <LoginOne />}/>
        </Routes>
        <Routes>
          <Route path="/login-2" element={ <LoginTwo />}/>
        </Routes>
          <hr />
          {/* <LoginOne /> */}
          <hr />
          {/* <Login /> */}
        </main>
      </>
    </Router>
  );
}

export default App;
