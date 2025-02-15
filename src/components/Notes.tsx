import React, { useState } from 'react';

const Notes: React.FC = () => {
  const [note, setNote] = useState('');
  const [submittedNotes, setSubmittedNotes] = useState<
    { id: number; text: string }[]
  >([]);

  const handleSubmit = () => {
    if (note.trim()) {
      setSubmittedNotes([...submittedNotes, { id: Date.now(), text: note }]);
      setNote(''); // Clear input after submission
    }
  };

  const handleClear = () => {
    setNote('');
  };

  const handleDelete = (id: number) => {
    setSubmittedNotes(submittedNotes.filter((n) => n.id !== id));
  };

  return (
    <div className="mt-4">
      <h3>Notes</h3>
      <textarea
        className="form-control"
        rows={4}
        placeholder="Write your notes here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <div className="mt-2">
        <button className="btn btn-primary me-2" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-secondary" onClick={handleClear}>
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
              <span>{n.text}</span>
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
