import { useState } from "react";

function AddDevForm({ onAddDev }) {
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Input validation on front-end: Required properties are needed to add a new role
    if (!newName.trim() || !newRole.trim()) return;

    // Define a new Dev element
    const newDev = {
      id: Date.now(),
      name: newName,
      role: newRole,
      seniority: "Junior",
      isMentor: false,
    };

    onAddDev(newDev);
    // Reset the name and role from the form
    setNewName("");
    setNewRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Dev</h2>
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            placeholder="Dev Name"
          />
        </label>
      </div>

      <div>
        <label>
          Role:{" "}
          <input
            type="text"
            value={newRole}
            onChange={(event) => setNewRole(event.target.value)}
            placeholder="Dev Role"
          />
        </label>
      </div>
      <button type="submit">Add Dev</button>
    </form>
  );
}

export default AddDevForm;
