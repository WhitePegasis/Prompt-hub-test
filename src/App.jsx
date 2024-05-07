// App.js

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { fetchGroupsData } from './store/store';
import MainPage from "./pages/MainPage";
import PromptList from "./components/PromptList";
import Navbar from "./components/Navbar";
import { NavbarWithMegaMenu } from "./components/NavbarWithMegaMenu";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchGroupsData());
  // }, [dispatch]);

  return (
    <div>
      <Navbar />
      {/* <NavbarWithMegaMenu/> */}
      <Router>
        <div className="container mx-auto p-4">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/group/:groupId" element={<PromptList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
