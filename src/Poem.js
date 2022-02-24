import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

const Poems = ({ passedId }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [votes, setVotes] = useState();

  //getting id of user selected
  const id = useParams().id;

  //get request by clicking on poem preview title link takes you to full poem 
  useEffect(() => {
    let requestId = id;
    if (passedId) {
      requestId = passedId;
    }
    axios
      .get("/api/poems/" + requestId, {headers: {bob:"Bobalooba"}})
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setText(response.data.text);
        setVotes(response.data.votes);
      });
  }, [passedId, id]);

  //post request to server to update the number of votes
  const addVote = () => {
    let requestId = id;
    if (passedId) {
      requestId = passedId;
    }
    axios
      .post("/api/poems/" + requestId, undefined, {headers: {bob:"Bobalooba"}})
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setText(response.data.text);
        setVotes(response.data.votes);
      });
  };

  return (
    <div>
      <div className="titleAuthorContainer">
        <b>{title}</b> by <i>{author}</i>
      </div>

      <div className="poemTextContainer">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>

      <div className="voteNumberContainer"><b>Likes:</b> {votes}</div>

      <div className="voteButtonContainer">
        <button className="voteButton" onClick={() => addVote()}>
          VOTE
        </button>
      </div>
    </div>
  );
};

export default Poems;
