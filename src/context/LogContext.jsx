import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogContext = createContext();

export const LogProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);

  // Fungsi untuk menambahkan log baru
  const addLog = ( action, module, description) => {
    const currentUser = localStorage.getItem("currentUser");
    const userName = currentUser ? JSON.parse(currentUser).name : "Unknown";

    const newLog = {
      id: Date.now(),
      user: userName,
      timestamp: new Date().toLocaleString(),
      action,
      module,
      description,
      ipAddress: "192.168.1.1",
    };

    // Ambil log sebelumnya
    const storedLogs = localStorage.getItem("activityLogs");
    const currentLogs = storedLogs ? JSON.parse(storedLogs) : [];   

    const updatedLogs = [...currentLogs, newLog];
    setLogs(updatedLogs);
    localStorage.setItem("activityLogs", JSON.stringify(updatedLogs));

    console.log(updatedLogs);
  };

  // Muat log dari localStorage saat pertama kali di-mount
  useEffect(() => {
    const storedLogs = localStorage.getItem("activityLogs");
    if (storedLogs) {
      setLogs(JSON.parse(storedLogs));
    }
  }, []);


  return (
    <LogContext.Provider value={{ logs, addLog }}>
      {children}
    </LogContext.Provider>
  );
};

export const useLogContext = () => useContext(LogContext);

LogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};