import React from "react";
import Layout from "./components/Layout";
import Posts from "./pages/Posts";
import Form from "./pages/Form";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/posts" element={<Posts />} />
            <Route path="/form" element={<Form />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
