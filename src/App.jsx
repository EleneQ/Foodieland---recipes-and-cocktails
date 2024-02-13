import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import ContactUsPage from "./pages/ContactUsPage";
import CocktailsPage from "./pages/CocktailsPage";
import AboutUsPage from "./pages/AboutUsPage";
import CocktailPage from "./pages/CocktailPage";
import { RecipeProvider } from "./context/RecipeContext";

const App = () => {
  return (
    <Router>
      <Navbar />

      <RecipeProvider>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/cocktails" element={<CocktailsPage />} />
          <Route path="/cocktail/:id" element={<CocktailPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </RecipeProvider>

      <Footer />
    </Router>
  );
};
export default App;
