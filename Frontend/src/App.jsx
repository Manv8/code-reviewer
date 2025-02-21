import React from 'react'
import "./App.css"
import prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import { useEffect, useState } from 'react'
import axios from "axios"
import Markdown from "react-markdown"
import Loading from './components/Loading'

const App = () => {
  const [review, setReview] = useState(``)
  const [code, setCode] = useState(`
    
                       function sum() {
                           return 1 + 1
                           }
                 `)
 
  async function reviewCode() {
    {
      setTimeout(() => {
        document.querySelector(".loader").style.display = "block"
        document.querySelector(".output").style.display = "none";

      }, 1000);
    }
    const response = await axios.post("http://localhost:3000/ai/get-review", { code })
    setReview(response.data)
    {
      document.querySelector(".loader").style.display = "none"
    }

  }


  return (
    <>
      
      <div className="main">
        <h1>Code Reviewer By Manvender Singh</h1>
        <div className="container">
          <div className="left">
            <h3>Enter the Code here,we check error and give best solution posssible</h3>
            <textarea
              onChange={e => setCode(e.target.value)}
              value={code}
              
              style={{
                fontFamily: '"Fira code","Fira Mono",monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: 'black',
                color: "white",
                height: "100%",
                width: "100%"

              }}
            >{code}</textarea>
            <div onClick={reviewCode} className="review">Review</div>
          </div>
          <div className="right">
            <h3 className='output'>Output</h3>
            {/* svg of looading */}
            <div className="loader">
              <svg className="bike" viewBox="0 0 48 30" width="48px" height="30px">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <g transform="translate(9.5,19)">
                    <circle className="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
                    <g className="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
                      <circle className="bike__spokes" r="5" />
                      <circle className="bike__spokes" r="5" transform="rotate(180,0,0)" />
                    </g>
                  </g>
                  <g transform="translate(24,19)">
                    <g className="bike__pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)">
                      <circle className="bike__pedals" r="4" />
                      <circle className="bike__pedals" r="4" transform="rotate(180,0,0)" />
                    </g>
                  </g>
                  <g transform="translate(38.5,19)">
                    <circle className="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
                    <g className="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
                      <circle className="bike__spokes" r="5" />
                      <circle className="bike__spokes" r="5" transform="rotate(180,0,0)" />
                    </g>
                  </g>
                  <polyline className="bike__seat" points="14 3,18 3" stroke-dasharray="5 5" />
                  <polyline className="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79" />
                  <path className="bike__handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" stroke-dasharray="10 10" />
                  <polyline className="bike__front" points="32.5 2,38.5 19" stroke-dasharray="19 19" />
                </g>
              </svg>
            </div>
            <Markdown className="outputText">{review}</Markdown>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
