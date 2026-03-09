import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import { LoadingProvider } from "./context/LoadingProvider";
import BrandPage from "./pages/BrandPage";
import ClientReelsPage from "./pages/ClientReelsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const HomePage = () => {
  return (
    <Suspense>
      <MainContainer>
        <Suspense>
          <CharacterModel />
        </Suspense>
      </MainContainer>
    </Suspense>
  );
};

const App = () => {
  return (
    <LoadingProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brands/:slug" element={<BrandPage />} />
        <Route path="/client-reels" element={<ClientReelsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LoadingProvider>
  );
};

export default App;
