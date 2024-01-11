import { Nav, Navbar, NavbarCollapse, NavbarToggle } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
export const Studentavigation=()=>{
    return(
        <div >
            <Navbar bg="primary" expand='lg'>
                <Link className="text-decoration-none text-dark ms-3 fs-4 " to={"/Studenhome"}>Home</Link>
            <NavbarToggle aria-controls="links"></NavbarToggle>
                <NavbarCollapse id="links">
                      <Nav >
                        <Link className="text-decoration-none text-dark ms-3 fs-4" to={"/Cart"}>Cart</Link>
                        <Link className="text-decoration-none text-dark ms-3 fs-4" onClick={()=>{
                            sessionStorage.removeItem("studentuser");
                            window.location.assign("/")
                        }}>Logout</Link>
                      </Nav>
            </NavbarCollapse>
       </Navbar>
        </div>
         
    )
}