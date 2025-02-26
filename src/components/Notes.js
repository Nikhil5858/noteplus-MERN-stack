import React, { useContext } from "react";
import noteContext from "../context/noteContext";
import NoteItem from "./NoteItem";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <>
      <div className="row my-3">
        <h1 className="text-center mb-3">Your Notes</h1>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
