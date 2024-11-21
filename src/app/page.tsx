import { Container } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container
      id="landing-page"
      fluid
      className="d-flex justify-content-center align-items-center text-center"
      style={{ height: '50vh' }}
    >
      <div>
        <h1>SpotMeBro</h1>
        <p>
          Empowering students to stay consistent, motivated, and achieve their fitness goals together.
        </p>
      </div>
    </Container>
  </main>
);

export default Home;
