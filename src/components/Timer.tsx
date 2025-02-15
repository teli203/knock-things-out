import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const increaseTime = () => {
    setTimeLeft((prev) => Math.min(prev + 1800, 7200)); // +30 mins, max 2 hrs
  };

  const decreaseTime = () => {
    setTimeLeft((prev) => Math.max(prev - 300, 0)); // -5 mins, min 0
  };

  return (
    <div className="text-center mb-3">
      <h3>Timer: {formatTime(timeLeft)}</h3>
      <button className="btn btn-primary me-2" onClick={increaseTime}>
        + 30 min
      </button>
      <button className="btn btn-warning me-2" onClick={decreaseTime}>
        - 5 min
      </button>
      <button
        className={`btn ${isRunning ? 'btn-danger' : 'btn-success'} me-2`}
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button className="btn btn-secondary" onClick={() => setTimeLeft(1500)}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
