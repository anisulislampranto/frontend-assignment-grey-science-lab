import React from "react";
import styles from "./app.module.scss";
import InputBar from "../InputBar";
import JobCards from "../JobCards/JobCards";

function App() {

  const handleSubmit = () => {
    
  };

  return (
    <div className={styles.app}>
      <div className={styles.header} />
      <div className={styles.container}>
        <InputBar handleSubmit={handleSubmit} />
      </div>
      <div>
        <JobCards />
      </div>
    </div>
  );
}

export default App;
