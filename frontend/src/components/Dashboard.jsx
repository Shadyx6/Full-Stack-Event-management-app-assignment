import React, { useState } from "react";

const Dashboard = () => {
  const mockEvents = [
    { _id: "1", name: "Tech Conference", description: "A conference on the latest in technology.", date: "2023-12-15T10:00:00Z", location: "San Francisco, CA", category: "Tech" },
    { _id: "2", name: "Music Festival", description: "Annual music festival featuring top artists.", date: "2023-11-20T18:00:00Z", location: "Austin, TX", category: "Music" },
    { _id: "3", name: "Art Exhibition", description: "Exhibition showcasing modern art.", date: "2023-10-10T09:00:00Z", location: "New York, NY", category: "Art" },
    { _id: "4", name: "Startup Pitch Night", description: "Startups pitch their ideas to investors.", date: "2025-12-01T19:00:00Z", location: "Seattle, WA", category: "Business" },
  ];

  const [filter, setFilter] = useState("upcoming");
  const [category, setCategory] = useState("all");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredEvents = mockEvents.filter(event => {
    const now = new Date();
    const isUpcoming = new Date(event.date) > now;
    const isPast = new Date(event.date) <= now;

    // Filter by time (upcoming/past)
    if (filter === "upcoming" && !isUpcoming) return false;
    if (filter === "past" && !isPast) return false;

    // Filter by category (only if not "all")
    if (category !== "all" && event.category !== category) return false;

    return true;
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center">Dashboard</h2>
      <p className="mt-4 text-center">Here you can manage your events.</p>

      <div className="flex gap-6">
        <div className="mt-6 flex justify-center items-center">
          <label htmlFor="filter" className="mr-2">Filter:</label>
          <select id="filter" value={filter} onChange={handleFilterChange} className="p-2 border rounded">
            <option value="upcoming">Upcoming Events</option>
            <option value="past">Past Events</option>
            <option value="all">All Events</option>
          </select>
        </div>

        <div className="mt-6 flex justify-center items-center">
          <label htmlFor="category" className="mr-2">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange} className="p-2 border rounded">
            <option value="all">All Categories</option>
            <option value="Tech">Tech</option>
            <option value="Music">Music</option>
            <option value="Art">Art</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">
          {filter === "upcoming" ? "Upcoming Events" : filter === "past" ? "Past Events" : "All Events"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event._id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold">{event.name}</h4>
                <p className="text-sm text-gray-600">{event.description}</p>
                <p className="text-sm mt-2"><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
                <p className="text-sm"><strong>Location:</strong> {event.location}</p>
              </div>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
