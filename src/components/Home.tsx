import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="header">
          <p>Welcome to</p>
          <h1>Briefly</h1>
        </div>
        <div className="articleTitle">
          <p>Article Title:</p>
        </div>
        <div className="instructionsContainer">
          <p>
            Specific instructions: (Ex: What ideas we should focus on to help
            you better understand?)
          </p>
          <form>
            <textarea
              inputMode="text"
              placeholder="Simply paste or type your notes into the text box."
              style={{
                width: "100%",
                height: "100px",
                fontSize: "15px",
                fontFamily: "Inter",
              }}
              required
            ></textarea>
            <button className="summarizeButton" type="submit">
              Summarize Article
            </button>
          </form>
        </div>
        <div className="anotherArticle">
          <p>Not this article?</p>
          <a>Click here to summarize another article. </a>
        </div>
      </div>
    </>
  );
}

export default Home;
