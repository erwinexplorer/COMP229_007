import React from "react";

const Dashboard = () => {
  return (
    <div>
      HEY <button onClick={() => localStorage.removeItem("token")}>logout</button>
    </div>
  );
};

export default Dashboard;
