import { useState } from "react";
import "../App.css";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

function App() {
  return (
    <div>
      <main>
        <h1>Password Input</h1>
        <PasswordInput />
        <SubmitButton />
      </main>
    </div>
  );
}

export default App;
