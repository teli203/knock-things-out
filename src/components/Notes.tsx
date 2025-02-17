import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Default Quill theme

const Notes: React.FC = () => {
  const [note, setNote] = useState("");
  const [submittedNotes, setSubmittedNotes] = useState<
    { id: number; text: string }[]
  >([]);

  const handleSubmit = () => {
    if (note.trim()) {
      setSubmittedNotes([...submittedNotes, { id: Date.now(), text: note }]);
      setNote(""); // Clear input after submission
    }
  };

  const handleClear = () => {
    setNote("");
  };

  const handleDelete = (id: number) => {
    setSubmittedNotes(submittedNotes.filter((n) => n.id !== id));
  };

  return (
    <div className="mt-4">
      <h3>Notes</h3>
      <h6>(Break down tasks in details)</h6>

      {/* Rich Text Editor */}
      <ReactQuill
        theme="snow"
        value={note}
        onChange={setNote}
        placeholder="Write your notes here..."
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }], // Header size
            ["bold", "italic", "underline"], // Formatting
            [{ list: "ordered" }, { list: "bullet" }], // Bullet points
            [{ color: [] }, { background: [] }], // Text & background colors
            ["clean"], // Remove formatting
          ],
        }} 
      />
      <div className="mt-2">
        <button className="btn btn-secondary me-2" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-outline-secondary" onClick={handleClear}>
          Clear
        </button>
      </div>

      {submittedNotes.length > 0 && (
        <div className="mt-4">
          <h3>Completed Notes</h3>
          {submittedNotes.map((n) => (
            <div
              key={n.id}
              className="d-flex justify-content-between align-items-center p-2 border rounded bg-light my-2"
            >
              <div dangerouslySetInnerHTML={{ __html: n.text }}></div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(n.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;
