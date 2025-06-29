import { Outlet } from "react-router"
import { useEffect, useState } from "react";
import Pop from "./components/Pop";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogDismissed, setDialogDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const percent = scrolled / totalHeight;
      if (percent >= 0.6 && !dialogDismissed) {
        setShowDialog(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dialogDismissed]);

  const handleClose = () => {
    setShowDialog(false);
    setDialogDismissed(true);
  };

  return (
    <>

      <Outlet />
      <Pop open={showDialog} onClose={handleClose}>
        {/* Your advertisement or content here */}
        <h2>Needs More Design!</h2>
        <p>As of now this is the pop up. there will designs and images coming in</p>
      </Pop>
      {/* Your page content */}
    </>
  )
}

export default App
