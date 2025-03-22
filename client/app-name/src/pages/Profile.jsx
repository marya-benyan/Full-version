import React, { useState, useEffect } from "react";
import { getUserById, updateUser } from "../services/api"; // Import API functions

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null); // Remove static data
  const [tempUser, setTempUser] = useState({});

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserById(); // Fetch current user data
        setUser(response.data);
        setTempUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => setIsEditing(true);

  const handleSave = async () => {
    try {
      // Update user data in the backend
      const response = await updateUser(tempUser);
      setUser(response.data); // Update local state with the new data
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleCancel = () => {
    setTempUser({ ...user }); // Reset tempUser to the original user data
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  // Color palette
  const colors = {
    blueGrey: "#3E4A56",
    rose: "#d39c94",
    white: "#ffffff",
  };

  // Calculate days remaining for events
  const calculateDaysRemaining = (eventDate) => {
    const today = new Date();
    const eventDay = new Date(eventDate);
    const diffTime = eventDay - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get event type icon
  const getEventIcon = (type) => {
    switch (type) {
      case "Workshop": return "🛠️";
      case "Class": return "📚";
      case "Event": return "🎭";
      case "Delivery": return "📦";
      default: return "📅";
    }
  };

  if (!user) return <div>Loading...</div>; // Show loading state while fetching data

  return (
    <div className="min-h-screen bg-blue-gray" style={{ backgroundColor: colors.white }}>
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg my-8">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold" style={{ color: colors.blueGrey }}>
              My Profile
            </h2>
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="flex items-center gap-1 text-sm font-medium text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
                style={{ backgroundColor: colors.rose }}
              >
                <span>✏️</span> Edit
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-1 text-sm font-medium text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
                  style={{ backgroundColor: colors.rose }}
                >
                  <span>💾</span> Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-1 text-sm font-medium text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
                  style={{ backgroundColor: colors.blueGrey }}
                >
                  <span>✖️</span> Cancel
                </button>
              </div>
            )}
          </div>

          {/* Profile Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left: Avatar and Basic Info */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={user.avatar || "/avatar.jpg"} // Use default avatar if not provided
                  alt="Profile"
                  className="w-36 h-36 rounded-full object-cover mb-4 border-4 shadow-md"
                  style={{ borderColor: colors.rose }}
                />
                <div 
                  className="absolute inset-0 rounded-full bg-blue-gray opacity-0 hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: colors.blueGrey }}
                ></div>
              </div>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={tempUser.name}
                  onChange={handleChange}
                  className="w-full text-center text-xl font-semibold border border-gray-300 rounded p-2 focus:outline-none focus:border-rose"
                  style={{ color: colors.blueGrey, borderColor: "#e5e7eb" }}
                />
              ) : (
                <h3 className="text-xl font-semibold" style={{ color: colors.blueGrey }}>{user.name}</h3>
              )}
              <p className="text-sm text-gray-500 mt-2">Member since March 2025</p>
            </div>

            {/* Right: Details */}
            <div className="col-span-2 bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={tempUser.email}
                      onChange={handleChange}
                      className="mt-1 w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose"
                      style={{ color: colors.blueGrey }}
                    />
                  ) : (
                    <p className="mt-1" style={{ color: colors.blueGrey }}>{user.email}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Phone</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={tempUser.phone}
                      onChange={handleChange}
                      className="mt-1 w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose"
                      style={{ color: colors.blueGrey }}
                    />
                  ) : (
                    <p className="mt-1" style={{ color: colors.blueGrey }}>{user.phone}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Address</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={tempUser.address}
                      onChange={handleChange}
                      className="mt-1 w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose"
                      style={{ color: colors.blueGrey }}
                    />
                  ) : (
                    <p className="mt-1" style={{ color: colors.blueGrey }}>{user.address}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Bio</label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={tempUser.bio}
                      onChange={handleChange}
                      className="mt-1 w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose resize-y"
                      style={{ color: colors.blueGrey }}
                      rows="4"
                    />
                  ) : (
                    <p className="mt-1 leading-relaxed" style={{ color: colors.blueGrey }}>{user.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold" style={{ color: colors.blueGrey }}>Upcoming Events</h3>
              <button
                className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded"
                style={{ backgroundColor: colors.rose, color: colors.white }}
              >
                <span>➕</span> Add Event
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {/* Events List */}
              {user.events.map(event => {
                const daysRemaining = calculateDaysRemaining(event.date);
                return (
                  <div key={event.id} className="bg-white rounded-lg p-4 shadow-sm border-l-4" style={{ borderLeftColor: daysRemaining <= 7 ? colors.rose : colors.blueGrey }}>
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: daysRemaining <= 7 ? `${colors.rose}20` : `${colors.blueGrey}20` }}>
                          <span className="text-lg">{getEventIcon(event.type)}</span>
                        </div>
                        <div>
                          <h4 className="font-medium" style={{ color: colors.blueGrey }}>{event.title}</h4>
                          <p className="text-sm text-gray-500">{formatDate(event.date)}</p>
                          <p className="text-sm text-gray-500">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-xs font-medium px-2 py-1 rounded-full" 
                          style={{ 
                            backgroundColor: daysRemaining <= 3 ? `${colors.rose}` : (daysRemaining <= 7 ? `${colors.rose}60` : `${colors.blueGrey}40`),
                            color: daysRemaining <= 3 ? colors.white : (daysRemaining <= 7 ? colors.white : colors.blueGrey)
                          }}>
                          {daysRemaining === 0 ? "Today" : 
                           daysRemaining === 1 ? "Tomorrow" : 
                           `${daysRemaining} days left`}
                        </div>
                        <div className="flex gap-2 mt-2">
                          <button className="text-xs p-1 rounded hover:bg-gray-100">
                            <span>📝</span>
                          </button>
                          <button className="text-xs p-1 rounded hover:bg-gray-100">
                            <span>🔔</span>
                          </button>
                          <button className="text-xs p-1 rounded hover:bg-gray-100">
                            <span>🗑️</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;