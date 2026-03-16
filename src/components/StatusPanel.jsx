// src/components/StatusPanel.jsx
import React from "react";

export default function StatusPanel({
  status,
  onCycleStatus,
  onPromoteRole,
  onReset,
}) {
  return (
    <section className="status-panel">
      <h3 className="status-heading">Status Panel</h3>
      <p className="status-text">
        Current status: <strong>{status}</strong>
      </p>

      <div className="status-buttons">
        <button type="button" onClick={onCycleStatus} className="status-button">
          Cycle Status
        </button>

        <button
          type="button"
          onClick={onPromoteRole}
          className="status-button-alt"
        >
          Promote Role
        </button>

        <button
          type="button"
          onClick={onReset}
          className="status-button-reset"
        >
          Reset Profile
        </button>
      </div>

      <p className="status-note">
        The panel does not modify the DOM itself.
        It only triggers callbacks, which update parent state.
        React then re-renders a new virtual component tree and
        efficiently patches the real DOM.
      </p>
    </section>
  );
}
