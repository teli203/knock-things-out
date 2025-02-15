import React, { useState } from 'react';

const Notes: React.FC = () => {
  const [notes, setNotes] = useState('');

  return (
    <div className="mt-4">
      <h3>Notes</h3>
      <textarea
        className="form-control"
        rows={4}
        placeholder="Write your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Notes;
