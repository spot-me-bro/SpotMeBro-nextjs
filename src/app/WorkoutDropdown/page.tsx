import WorkoutDropdown from '@/components/WorkoutDropdown';
import { Container } from 'react-bootstrap';
// The landing page after a user signs in, lets the user choose what type of workout they want to work on that day
const Dropdown = () => (
  <main>
    <Container className="py-3">
      <WorkoutDropdown />
    </Container>
  </main>
);

export default Dropdown;
