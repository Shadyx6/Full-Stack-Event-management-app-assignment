const API_URL = "https://full-stack-event-management-app.onrender.com/api";

export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const loginUser = async (userData) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const createEvent = async (eventData, token) => {
  console.log("📤 Sending Event Data to:", API_URL); // Debugging

  const res = await fetch(`${API_URL}/events`, {  
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: eventData,
  });

  const responseData = await res.json();
  console.log("🔵 API Response:", responseData);

  return responseData;
};


export const getEvents = async () => {
  const res = await fetch(`${API_URL}/events`);
  return res.json();
};
