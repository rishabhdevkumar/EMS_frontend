import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
