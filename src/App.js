import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Mike Oxlong"
        avatar="https://randomuser.me/api/portraits/men/58.jpg"
        online
      />
      <Contact
        name="Phill McHunt"
        avatar="https://randomuser.me/api/portraits/men/18.jpg"

      />
      <Contact
        name="E. Norma Stits"
        avatar="https://randomuser.me/api/portraits/women/10.jpg"
        online
      />
    </div>
  );
}

export default App;
