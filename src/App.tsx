import { useEffect, type JSX } from "react";
import Header from "./components/Header/Header.tsx";

export default function App(): JSX.Element {
  useEffect(() => {
    const body = document.body;
    const frameId = requestAnimationFrame(() => {
      body.classList.add("site-loaded");
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

