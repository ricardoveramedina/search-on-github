import { useEffect } from "react";
import Main from "./views/Main";

function App() {
  const selectedTheme = "dark";
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
    document.body.setAttribute("data-theme", selectedTheme);
  }, [selectedTheme]);
  return <Main />;
}

export default App;
