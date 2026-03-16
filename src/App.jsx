// src/App.jsx
import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard.jsx";
import StatusPanel from "./components/StatusPanel.jsx";

const initialUser = {
  name: "Gireesh vardhan",
  role: "Software Engineer",
  status: "Online",
};

export default function App() {
  const [user, setUser] = useState(initialUser);

  const cycleStatus = () => {
    setUser((prev) => {
      const order = ["Online", "Away", "Do Not Disturb", "Offline"];
      const idx = order.indexOf(prev.status);
      const nextStatus = order[(idx + 1) % order.length];
      return { ...prev, status: nextStatus };
    });
  };

  const promoteRole = () => {
    setUser((prev) => {
      if (prev.role === "Software Engineer") {
        return { ...prev, role: "Senior Software Engineer" };
      }
      if (prev.role === "Senior Software Engineer") {
        return { ...prev, role: "Tech Lead" };
      }
      return { ...prev, role: "Software Engineer" };
    });
  };

  const resetProfile = () => setUser(initialUser);

  return (
    <div className="app">
      <h1 className="app-title">Profile Dashboard</h1>

      <ProfileCard
        name={user.name}
        role={user.role}
        status={user.status}
      />

      <StatusPanel
        status={user.status}
        onCycleStatus={cycleStatus}
        onPromoteRole={promoteRole}
        onReset={resetProfile}
      />

      <p className="app-hint">
        Every button click updates React state, which triggers a rerender.
        React compares the new virtual UI tree with the previous one
        and only applies minimal DOM updates (reconciliation).
      </p>
    </div>
  );
}
