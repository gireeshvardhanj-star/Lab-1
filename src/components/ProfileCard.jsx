// src/components/ProfileCard.jsx
import React from "react";

export default function ProfileCard({ name, role, status }) {
  const statusColor = {
    Online: "#22c55e",
    Away: "#eab308",
    "Do Not Disturb": "#ef4444",
    Offline: "#6b7280",
  }[status] || "#6b7280";

  return (
    <section className="profile-card">
      <div className="profile-avatar">
        {name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()}
      </div>
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-role">{role}</p>
        <p className="profile-status-row">
          <span
            className="profile-status-dot"
            style={{ backgroundColor: statusColor }}
          />
          <span>{status}</span>
        </p>
      </div>
    </section>
  );
}
