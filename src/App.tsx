import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import { LoadingProvider } from "./context/LoadingProvider";
import BrandPage from "./pages/BrandPage";
import ClientReelsPage from "./pages/ClientReelsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const HomePage = () => {
  return (
    <Suspense>
      <MainContainer>
        <ErrorBoundary>
          <Suspense fallback={<div style={{ minHeight: "500px" }} />}>
            <CharacterModel />
          </Suspense>
        </ErrorBoundary>
      </MainContainer>
    </Suspense>
  );
};

const App = () => {
  // Register service worker for PWA support
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
    }
  }, []);

  return (
    <LoadingProvider>
      <ScrollToTop />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands/:slug" element={<BrandPage />} />
          <Route path="/client-reels" element={<ClientReelsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ErrorBoundary>
    </LoadingProvider>
  );
};

export default App;
