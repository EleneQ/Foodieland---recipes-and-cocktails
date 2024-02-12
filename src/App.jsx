import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import {
  HomePage,
  RecipePage,
  ContactUsPage,
  CocktailsPage,
  AboutUsPage,
  CocktailPage,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/cocktails" element={<CocktailsPage />} />
        <Route path="/cocktail/:id" element={<CocktailPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
