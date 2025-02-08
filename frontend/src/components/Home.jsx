import { useEffect, useState } from "react";
import { getEvents } from "../utils/api";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      const now = new Date();

      // ✅ Only keep upcoming events
      const upcomingEvents = data.filter(event => new Date(event.date) > now);
      setEvents(upcomingEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center">Upcoming Events</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* ✅ Display Event Image */}
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

export default Home;
