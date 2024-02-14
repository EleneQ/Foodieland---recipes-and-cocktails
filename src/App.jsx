import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import HomePage from "./pages/HomePage";
import MealRecipePage from "./pages/MealRecipePage";
import ContactUsPage from "./pages/ContactUsPage";
import CocktailsPage from "./pages/CocktailsPage";
import AboutUsPage from "./pages/AboutUsPage";
import CocktailRecipePage from "./pages/CocktailRecipePage";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/recipe/:id" element={<MealRecipePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/cocktails" element={<CocktailsPage />} />
        <Route path="/cocktail/:id" element={<CocktailRecipePage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};
export default App;
