// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import CodeReviewPage from './CodeReviewPage'; // Your code review page component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/code-review" element={<CodeReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
