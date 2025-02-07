import React, { useState } from "react";

function CreateEvent() {
  const [eventData, setEventData] = useState({
    name: "", description: "", date: "", location: "", category: "Tech", image: ""
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", eventData);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center">Create Event</h2>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Event Name" className="w-full p-2 border rounded" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="datetime-local" name="date" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" className="w-full p-2 border rounded" onChange={handleChange} required />
        <select name="category" className="w-full p-2 border rounded" onChange={handleChange}>
          <option value="Tech">Tech</option>
          <option value="Music">Music</option>
          <option value="Art">Art</option>
          <option value="Business">Business</option>
        </select>
        <input type="file" name="image" className="w-full p-2 border rounded" onChange={(e) => setEventData({ ...eventData, image: e.target.files[0] })} />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
