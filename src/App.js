import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Adminhome } from "./Admin/adminhome";
import { Notifiaction } from "./Admin/notification";
import { Navigation } from "./Admin/navigation";
import { Studenthome } from "./student/Studenthome";
import { Studentavigation } from "./student/navigation";
import { Cart } from "./student/card";
import { Createuser } from "./Admin/createuser";
import { Login } from "./login/login";



function App() {
  return (
   
   (sessionStorage.getItem('adminuser'))?
   <BrowserRouter>
  <Navigation/>
 <Routes>
      <Route path="Adminhome" exact element={<Adminhome/>}></Route>
      <Route path="Notification" exact element={<Notifiaction/>}></Route>
      <Route path="createuser" exact element={<Createuser/>}></Route>

   </Routes>
 </BrowserRouter>
:(sessionStorage.getItem('studentuser'))?
<BrowserRouter>
  <Studentavigation/>
 <Routes>
      <Route path="Studenhome" exact element={<Studenthome/>}></Route>
      <Route path="Cart" exact element={<Cart/>}></Route>
      <Route path="Notification" exact element={<Notifiaction/>}></Route>
   </Routes>
 </BrowserRouter>
:
  <Login/>
  );
}

export default App;

