import React, { useEffect, useState } from "react";
import Loading from "./Loading.js";
import Tours from "./Tours.js";
import tourData from "../Data/DataTours.js";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    setLoading(true);
    setTimeout(() => {
      setTours(tourData);
      setLoading(false);
    }, 1000);
  };

  // ✅ Properly call fetchTours inside useEffect
  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!tours || tours.length === 0) {
    return (
      <main style={{ textAlign: 'center', padding: '20px' }}>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>Tour Packages</h1>
      <Tours tours={tours} onRemove={removeTour} />
    </main>
  );
};

export default App;