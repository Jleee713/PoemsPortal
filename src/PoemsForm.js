import React, { useState } from "react";
import axios from "axios";
import Poems from "./Poem";

const Pform = ({ poemInfo }) => {
  //initial state of empty form
  let initialState = poemInfo;
  if (!initialState) {
    initialState = { title: "", author: "", text: "" };
  }

  const [formInfo, setFormInfo] = useState(initialState);
  const [newFormId, setNewFormId] = useState(null);

  //new poem
  const addPoem = (newPoem) => {
    axios.post("/api/poems", newPoem, {headers: {bob:"Bobalooba"}}).then((response) => {
      setNewFormId(response.data.id);
    });
  };

  const updateField = (event) => {
    const name = event.target.attributes.name.value;
    if (name === "title") {
      setFormInfo({ ...formInfo, title: event.target.value });
    } else if (name === "author") {
      setFormInfo({ ...formInfo, author: event.target.value });
    } else if (name === "text") {
      setFormInfo({ ...formInfo, text: event.target.value });
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    addPoem(formInfo);
    setFormInfo(initialState);
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          onChange={updateField}
          value={formInfo.title}
        ></input>

        <label htmlFor="author">Author</label>
        <input
          name="author"
          onChange={updateField}
          value={formInfo.author}
        ></input>

        <label htmlFor="text">Text</label>
        <textarea
          name="text"
          onChange={updateField}
          value={formInfo.text}
        ></textarea>

        <button className="addButton" type="submit">
          Add
        </button>
      </form>

      {newFormId && <Poems passedId={newFormId} />}
    </div>
  );
};

export default Pform;
