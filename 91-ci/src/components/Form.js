import { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submit({ title, body: content });
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          onChange={(ev) => setTitle(ev.target.value)}
        />
      </div>

      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          type="content"
          onChange={(ev) => setContent(ev.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
