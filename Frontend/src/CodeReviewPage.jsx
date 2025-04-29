// CodeReviewPage.jsx (formerly App.jsx)
import React, { useState } from 'react';
import "./App.css";
import axios from "axios";
import Markdown from "react-markdown";
import Loading from './components/Loading';

const CodeReviewPage = () => {
  const [review, setReview] = useState(``);
  const [code, setCode] = useState(`
    function sum() {
        return 1 + 1
    }
  `);

  async function reviewCode() {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "block";
      document.querySelector(".output").style.display = "none";
    }, 100);

    const response = await axios.post("http://localhost:3000/ai/get-review", { code });
    setReview(response.data);
    document.querySelector(".loader").style.display = "none";
  }

  return (
    <div className="main">
      <h1>Code Reviewer</h1>
      <div className="container">
        <div className="left">
          <h3>Enter the Code here, we check for errors and provide the best solution possible</h3>
          <textarea
            onChange={(e) => setCode(e.target.value)}
            value={code}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: 'black',
              color: "white",
              height: "100%",
              width: "100%",
            }}
          >
            {code}
          </textarea>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          <h3 className="output">Output</h3>
          {/* Loading SVG */}
          <div className="loader">
            <svg className="bike" viewBox="0 0 48 30" width="48px" height="30px">
            </svg>
                <h3>Loading...</h3>
          </div>
          <Markdown className="outputText">{review}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default CodeReviewPage;
