import { Outlet } from "react-router"
// import { useEffect, useState } from "react";
// import Pop from "./components/Pop";

function App() {
//   const [showDialog, setShowDialog] = useState(false);
//   const [dialogDismissed, setDialogDismissed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY + window.innerHeight;
//       const totalHeight = document.documentElement.scrollHeight;
//       const percent = scrolled / totalHeight;
//       if (percent >= 0.6 && !dialogDismissed) {
//         setShowDialog(true);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [dialogDismissed]);

//   const handleClose = () => {
//     setShowDialog(false);
//     setDialogDismissed(true);
//   };


return (
    <>
      <Outlet />
    </>
)
}


export default App
