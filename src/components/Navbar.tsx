'use client';

import { WorkoutType } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { BoxArrowRight } from 'react-bootstrap-icons';

// Tells the NavBar what props it is receiving and what type they are
interface NavBarProps {
  profile: {
    type: WorkoutType;
  } | null;
}

// Helper function to convert workout type to a string
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
    <Navbar className="custom-navbar py-3" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image
            src="/newlogo.png"
            alt="SpotMeBro Logo"
            height={85}
            className="me-2"
          />
          <span className="brand-name">SpotMeBro</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto">
            {currentUser
              ? (
                <>
                  <Nav.Link href="/list_partners" active={pathName === '/list_partners'}>List Partners</Nav.Link>
                  <Nav.Link href="/WorkoutDropdown" active={pathName === '/workoutdropdown'}>Select a Workout</Nav.Link>
                  <Nav.Link href="/MatchOrFind" active={pathName === '/matchorfind'}>Match or Find</Nav.Link>
                  <Nav.Link href="/ListWorkouts" active={pathName === '/listworkouts'}>Workouts</Nav.Link>
                  {currentUser && role === 'ADMIN' && (
                    <Nav.Link href="/admin" active={pathName === '/admin'}>Admin</Nav.Link>
                  )}
                </>
              )
              : ''
            }
          </Nav>

          <Nav className="align-items-center">
            {session ? (
              <>
                <span className="me-3 workout-type">
                  {`Current workout type: ${converter(profile?.type)}` || 'List Stuff'}
                </span>
                <NavDropdown id="login-dropdown" title={currentUser}>
                  <NavDropdown.Item href="/api/auth/signout">
                    <BoxArrowRight className="me-2" />
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link className="sign-up" href="/auth/signup">Sign up</Nav.Link>
                <Nav.Link className="log-in" href="/auth/signin">Log in</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
