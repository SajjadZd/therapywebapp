// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import { SignInPage } from "./pages/signin";
// import { lsVariables } from "./config/localStorage";
// import { HomePage } from "./pages/home";
//import Furniture from "./practice/furniture";
import Therapy from "./practice/therapy";

function App() {
  // const WelcomePage = () => {
  //   let user = localStorage.getItem(lsVariables.user);
  //   if (user) {
  //     return <HomePage />;
  //   } else {
  //     return <SignInPage />;
  //   }
  // };

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<WelcomePage />} />
    //   </Routes>
    // </BrowserRouter>
    //I'm Sajjad
    <Therapy/>
  );
}

export default App;
