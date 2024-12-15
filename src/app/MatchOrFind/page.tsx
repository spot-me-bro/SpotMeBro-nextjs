import MatchOrFind from '@/components/MatchOrFind';
import { Container } from 'react-bootstrap';
// Lets the user choose if they want to find partners or workouts
const TwoChoices = () => (
  <main>
    <Container className="py-3">
      <MatchOrFind />
    </Container>
  </main>
);

export default TwoChoices;
