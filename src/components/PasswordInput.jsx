// Code PasswordInput Component Here

import { useState } from "react";

function PasswordInput() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    // IMPORTANT: use three dots, not the unicode ellipsis
    console.log("Entering password...");
    setValue(e.target.value);
  }

  return (
    <div style={{ display: "grid", gap: 8, marginBottom: 16 }}>
      <label htmlFor="pw">Password</label>
      <input
        id="pw"
        type="password"
        value={value}
        onChange={handleChange}
        placeholder="Enter password"
      />
    </div>
  );
}

export default PasswordInput;
