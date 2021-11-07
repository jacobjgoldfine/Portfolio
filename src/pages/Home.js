import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WorkEx from "../components/WorkEx";

export default function Home() {
  return (
    <div className="bg-light">
      <Header />
      <About />
      <WorkEx />
      <Footer />
    </div>
  );
}
