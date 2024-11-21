/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BoxArrowRight } from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">SpotMeBro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser
              ? [
                  <Nav.Link id="add-stuff-nav" href="/add" key="add" active={pathName === '/add'}>
                    Add Stuff
                  </Nav.Link>,
                  <Nav.Link id="list-stuff-nav" href="/list" key="list" active={pathName === '/list'}>
                    List Stuff
                  </Nav.Link>,
                  <Nav.Link
                    id="workout-dropdown-nav"
                    href="/WorkoutDropdown"
                    key="workoutdropdown"
                    active={pathName === '/workoutdropdown'}
                  >
                    <strong>Select a Workout</strong>
                  </Nav.Link>,
                ]
              : ''}
            {currentUser && role === 'ADMIN' ? (
              <Nav.Link id="admin-stuff-nav" href="/admin" key="admin" active={pathName === '/admin'}>
                Admin
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>
          <Nav>
            {session ? (
              <Nav.Link id="sign-out" href="/api/auth/signout" className="circle-link">
                <BoxArrowRight />
                Sign Out
              </Nav.Link>
            ) : (
              <>
                <Nav.Link id="sign-up" href="/auth/signup" className="circle-link">
                  Sign up
                </Nav.Link>
                <Nav.Link id="log-in" href="/auth/signin" className="circle-link">
                  Log in
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
