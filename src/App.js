import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

export const HatsPage = (props) => {
  return (
    <div>
      <button onClick={() => props.history.push("/topics")}>TOPICS</button>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const TopicsPage = () => {
  return (
    <div>
      <h1>THIS IS TOPICS PAGE</h1>
    </div>
  );
};

const TopicsDetail = () => {
  return (
    <div>
      <h1>THIS IS TOPICS DETAIL PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/topics/:topicId" element={<TopicsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
