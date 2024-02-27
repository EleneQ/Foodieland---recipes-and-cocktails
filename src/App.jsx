import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home/HomePage";
import MealRecipePage from "./pages/MealRecipe/MealRecipePage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import CocktailsPage from "./pages/Cocktails/CocktailsPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import CocktailRecipePage from "./pages/CocktailRecipe/CocktailRecipePage";
import ScrollToTop from "./utils/scrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />

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
    </>
  );
};
export default App;
