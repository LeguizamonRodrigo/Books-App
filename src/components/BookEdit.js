import { useState } from "react";

function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("new title", title);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>title</label>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
