import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SkipLink from "./SkipLink";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import ErrorBoundary from "./ErrorBoundary";
import setSplitText from "./utils/splitText";
import PortfolioSections from "./PortfolioSections";
import useScrollReveal from "../hooks/useScrollReveal";
import { useLoading } from "../context/LoadingProvider";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const { isLoading } = useLoading();
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  useScrollReveal();

  useEffect(() => {
    if (isLoading) return;

    const timeout = window.setTimeout(() => {
      import("./utils/initialFX").then((module) => {
        if (module.startLandingLoopOnly) {
          module.startLandingLoopOnly();
        }
      });
    }, 180);

    return () => window.clearTimeout(timeout);
  }, [isLoading]);

  return (
    <div className="container-main">
      <SkipLink />
      <Cursor />
      <Navbar />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main" id="main-content" role="main">
            <Landing>{!isDesktopView && children}</Landing>
            <ErrorBoundary>
              <About />
            </ErrorBoundary>
            <ErrorBoundary>
              <WhatIDo />
            </ErrorBoundary>
            <ErrorBoundary>
              <Career />
            </ErrorBoundary>
            <ErrorBoundary>
              <Work />
            </ErrorBoundary>
            <ErrorBoundary>
              <PortfolioSections />
            </ErrorBoundary>
            {isDesktopView && (
              <ErrorBoundary>
                <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
                  <TechStack />
                </Suspense>
              </ErrorBoundary>
            )}
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
