import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEvents } from "../utils/api";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filter, setFilter] = useState("upcoming"); // ✅ Default to upcoming
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      const now = new Date();

      // ✅ Initially show only upcoming events
      const upcomingEvents = data.filter(event => new Date(event.date) > now);
      setEvents(data); // Keep all events
      setFilteredEvents(upcomingEvents); // Show only upcoming events initially
    };

    fetchEvents();
  }, []);

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    applyFilters(selectedFilter, category);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    applyFilters(filter, selectedCategory);
  };

  const applyFilters = (selectedFilter, selectedCategory) => {
    const now = new Date();
    let filtered = events;

    if (selectedFilter === "upcoming") {
      filtered = filtered.filter(event => new Date(event.date) > now);
    } else if (selectedFilter === "past") {
      filtered = filtered.filter(event => new Date(event.date) <= now);
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    setFilteredEvents(filtered);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <button
          onClick={() => navigate("/create-event")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          + Create Event
        </button>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
        <div className="flex items-center">
          <label htmlFor="filter" className="mr-2 font-semibold">Filter:</label>
          <select
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            className="p-2 border rounded"
          >
            <option value="upcoming">Upcoming Events</option>
            <option value="past">Past Events</option>
            <option value="all">All Events</option>
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="category" className="mr-2 font-semibold">Category:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="p-2 border rounded"
          >
            <option value="all">All</option>
            <option value="Tech">Tech</option>
            <option value="Music">Music</option>
            <option value="Art">Art</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>

      {/* Events List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event._id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {event.image && (
                <img src={event.image} alt={event.name} className="w-full h-40 object-cover rounded-lg mb-2" />
              )}
              <h4 className="text-lg font-bold">{event.name}</h4>
              <p className="text-sm text-gray-600">{event.description}</p>
              <p className="text-sm mt-2"><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
              <p className="text-sm"><strong>Location:</strong> {event.location}</p>
              <p className="text-sm"><strong>Category:</strong> {event.category}</p>
            </div>
          ))
        ) : (
          <p className="text-center mt-4">No upcoming events found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
