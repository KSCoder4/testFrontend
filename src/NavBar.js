import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const [show, setShow] = useState(false);

  const closeSidebar = () => setShow(false);
  const showSidebar = () => {
    setShow(true);
  };

  const logout = () => {
    closeSidebar();
    {/*api.logoutUser();*/ }
  };

  return (
    <>
      <div className='container-fluid p-4'>
        <div className='container' onClick={showSidebar}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
        <Offcanvas backdrop='false' show={show} onHide={closeSidebar}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="heading">Navigation</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavDropdown.Item className='navLink' as={Link} to='/' onClick={closeSidebar}>
              Home Page
            </NavDropdown.Item>
            <br />
            <NavDropdown.Item className='navLink' as={Link} to='/log' onClick={closeSidebar}>
              Login
            </NavDropdown.Item>
            <br />
            {/*{api.checkLoggedInStatus() ? (*/}
            <NavDropdown.Item className='navLink' as={Link} to='/space' onClick={closeSidebar}>
              Space Exploration (In Progress)
            </NavDropdown.Item>
            {/*}) : null}*/}
            <br />
            {/*{api.checkLoggedInStatus() ? (*/}
            <NavDropdown.Item className='navLink' as={Link} to='/userlist' onClick={closeSidebar}>
              Userlist
            </NavDropdown.Item>
            {/*}) : null}*/}
            <br />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default NavBar;
