import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PreviewPoem = () => {
  //array of poem
  const [poemList, setPoemList] = useState([]);

  //special header and getting the poems and sorting by number of votes
  useEffect(() => {
    axios.get("/api/poems", {headers: {bob:"Bobalooba"}}).then((response) => {
      setPoemList(response.data.sort((a, b) => b.votes - a.votes));
    });
  }, []);

  return (
    <div id="previewPoemContainer">
      {poemList.map((content, id) => {
        return (
          <div className="poemHeaderLink" key={id}>
            <Link to={"/poems/" + content.id}>
              <h1>{content.title}</h1>
            </Link>
            <h4> by {content.author}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewPoem;
