import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // 从 localStorage 读取保存的主题偏好
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // 默认深色主题
  });

  useEffect(() => {
    // 保存主题偏好到 localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // 更新 HTML 根元素的 data-theme 属性
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
