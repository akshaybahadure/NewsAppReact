import "./App.css";
import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App=()=> {
  
  const pageSize=9;
  const apikey=process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)


    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
        
      />
          <Routes>
            
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey}  key="general" pageSize={pageSize} country="in" category="General" />}/>
          <Route exact path="/Business" element={<News setProgress={setProgress} apikey={apikey}  key="Business" pageSize={pageSize} country="in" category="Business" />}/>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} apikey={apikey}  key="Entertainment" pageSize={pageSize} country="in" category="Entertainment" />}/>
          <Route exact path="/Science" element={<News setProgress={setProgress} apikey={apikey}  key="Science" pageSize={pageSize} country="in" category="Science" />}/>
          <Route exact path="/Sports" element={<News setProgress={setProgress} apikey={apikey}  key="Sports" pageSize={pageSize} country="in" category="Sports" />}/>
          <Route exact path="/Health" element={<News setProgress={setProgress} apikey={apikey}  key="Health" pageSize={pageSize} country="in" category="Health" />}/>
          <Route exact path="/Technology" element={<News setProgress={setProgress} apikey={apikey}  key="Technology" pageSize={pageSize} country="in" category="Technology" />}/>
            
          </Routes>
        </Router>
      </div>
    );

}
export default App;