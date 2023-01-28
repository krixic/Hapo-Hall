import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home";
import { Errorpage } from "./components/pages/errorpage";
import { LevelsPage } from "./components/pages/levels-page";
import { LeaderboardPage } from "./components/pages/leaderboard-page";

import {
  celestelevels,
  devildaggerslevels,
  gdlevels,
  hyperdemonlevels,
  irllevels,
  l4d2levels,
} from "./data/levels-data";

const allLevels = [
  { path: "/celeste", data: celestelevels },
  { path: "/devil-daggers", data: devildaggerslevels },
  { path: "/gd", data: gdlevels },
  { path: "/hyper-demon", data: hyperdemonlevels },
  { path: "/irl", data: irllevels },
  { path: "/l4d2", data: l4d2levels },
];

function App() {
  const createLevelsPage = (path, data) => (
    <Route path={path} element={<LevelsPage levelsData={data} />} />
  );

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {allLevels.map(({ path, data }) => createLevelsPage(path, data))}
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
