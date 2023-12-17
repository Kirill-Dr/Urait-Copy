import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { MainRoutes } from "./MainRoutes";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
