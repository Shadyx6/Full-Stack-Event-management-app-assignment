import { useState } from "react";
import { createEvent } from "../utils/api";

const CreateEvent = () => {
  let user = JSON.parse(localStorage.getItem("user"))
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    category: "Tech",
    image: null,
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setEventData({ ...eventData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", eventData.name);
    formData.append("description", eventData.description);
    formData.append("date", eventData.date);
    formData.append("location", eventData.location);
    formData.append("category", eventData.category);
    formData.append("image", eventData.image); 
  
    console.log(Object.fromEntries(formData.entries())); 
  
    const response = await createEvent(formData, user.token);
  
    if (response._id) {
      alert("Event Created Successfully!");
    } else {
      alert(response.message || "Error creating event");
    }
  };
  
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center">Create Event</h2>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit} encType="multipart/form-data">
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
        <input type="file" name="image" className="w-full p-2 border rounded" onChange={handleImageChange} required />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
