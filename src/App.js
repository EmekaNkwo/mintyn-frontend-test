import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Sidebar, Topbar } from "./components";
import { Overview } from "./pages";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Overview />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
