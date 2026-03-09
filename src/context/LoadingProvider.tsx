import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const isHomeAtBoot = window.location.pathname === "/";
  const [hasShownLoading, setHasShownLoading] = useState(
    () => !isHomeAtBoot
  );
  const [isLoading, setIsLoading] = useState(
    () => isHomeAtBoot
  );
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    if (location.pathname !== "/" && isLoading) {
      setIsLoading(false);
    }
  }, [location.pathname, isLoading]);

  useEffect(() => {
    if (!isLoading && !hasShownLoading) {
      setHasShownLoading(true);
    }
  }, [isLoading, hasShownLoading]);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  const showLoader = location.pathname === "/" && isLoading && !hasShownLoading;

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {showLoader && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
