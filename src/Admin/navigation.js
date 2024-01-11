import { Nav, Navbar, NavbarCollapse, NavbarToggle } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
export const Navigation=()=>{
    return(
        <div >
            <Navbar bg="primary" expand='lg'>
            <Link className="text-decoration-none text-dark ms-3 fs-4 " to={"/Adminhome"}>Home</Link>
          
            <NavbarToggle aria-controls="links"></NavbarToggle>
                <NavbarCollapse id="links">
                      <Nav >
                        <Link className="text-decoration-none text-dark ms-3 fs-4" to={"/Notification"}>Notifiaction</Link>
                        <Link className="text-decoration-none text-dark ms-3 fs-4" to={"/createuser"}>Createuser</Link>
                        <Link className="text-decoration-none text-dark ms-3 fs-4" 
                        onClick={()=>{
                            sessionStorage.removeItem("adminuser");
                        }}
                        
                        >logout</Link>
                      </Nav>
        </NavbarCollapse>
       </Navbar>
        </div>
         
    )
}