import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Hero, AllCategories } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <AllCategories />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
  );
};
export default App;
