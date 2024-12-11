/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { WorkoutType } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { BoxArrowRight } from 'react-bootstrap-icons';

// Tells the NavBar what props it is reciving and what type they are
// In our case we are saying it will take either a workout type or nothing
// We need this in case the current user doesnt have a profile (like an admin)
interface NavBarProps {
  profile: {
    type: WorkoutType;
  } | null;
}

// Helper function used to go from workout type to the a string value to be displayed
function converter(type: WorkoutType | undefined): string {
  if (type === undefined) {
    return 'admin';
  }
  switch (type) {
    case 'push': return 'push';
    case 'pull': return 'pull';
    case 'legs': return 'legs';
    case 'full': return 'full';
    case 'cardio': return 'cardio';
    default: return 'admin';
  }
}
const NavBar: React.FC<NavBarProps> = ({ profile }) => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="mx-auto">
        <Image
          src="/newlogo.png"
          alt="SpotMeBro Logo"
          height={85}
        />
        </Navbar.Brand>
        <Nav.Link href="/about" id="about-nav" active={pathName === '/about'}>
           About Us
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser
              ? [
                  <Nav.Link id="list-stuff-nav" href="/list_partners" key="list" active={pathName === '/list_partners'}>
                    List Partners
                  </Nav.Link>,
                  <Nav.Link
                    id="workout-dropdown-nav"
                    href="/WorkoutDropdown"
                    key="workoutdropdown"
                    active={pathName === '/workoutdropdown'}
                  >
                    Select a Workout
                  </Nav.Link>,
                  <Nav.Link
                    id="match-or-find-nav"
                    href="/MatchOrFind"
                    active={pathName === '/matchorfind'}
                  >
                    Match or Find
                  </Nav.Link>,
                  <Nav.Link href="/ListWorkouts">Workouts</Nav.Link>,
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
              <Nav className="align-items-center">
              <span id="list-stuff-nav" key="list" className="me-3">
                {`Current workout type: ${converter(profile?.type)}` || 'List Stuff'}
              </span>
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
              </Nav>
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
            {pathName.startsWith('/admin') ? (
            <span id="list-stuff-nav" key="list" className="me-3">
            NavBar2
            </span>
          )
          : ''}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
