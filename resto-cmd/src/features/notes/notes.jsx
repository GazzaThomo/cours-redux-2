import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notesSelectors, notesSlice } from "./notesSlices";

export const Notes = () => {
  const notes = useSelector(notesSelectors.selectAll);
  const dispatch = useDispatch();

  const handleNoteSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const note = form.note?.value;
    dispatch(
      notesSlice.actions.addNote({
        content: note,
        id: nanoid(),
      })
    );
  };

  const handleRemoveNote = (id) => dispatch(notesSlice.actions.removeNote(id));

  return (
    <div className="Notes">
      <form onSubmit={handleNoteSubmit}>
        <label>
          Saisir une note
          <textarea name="note"></textarea>
        </label>
        <button type="submit" className="AddNote">
          Ajouter
        </button>
      </form>
      <ul className="NodeList">
        {notes &&
          notes?.map((note) => (
            <li key={note.id}>
              📝 {note.content}{" "}
              <button onClick={() => handleRemoveNote(note.id)}>
                supprimer ❌
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
