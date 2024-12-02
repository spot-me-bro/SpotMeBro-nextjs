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
        <p>
          SpotMeBro is a platform designed to help students find gym partners based on their fitness level,
          experience, and goals.Whether you’re a beginner looking for guidance or an advanced gym-goer looking
          for a partner to push you to your limits, SpotMeBro aims to make your workout experience more engaging
          and productive. SpotMeBro is a platform designed to help students find gym partners based on their fitness
          level, experience, and goals. Whether you’re a beginner looking for guidance or an advanced gym-goer looking
          for a partner to push you to your limits, SpotMeBro aims to make your workout experience more engaging
          and productive.
        </p>
      </div>
    </Container>
  </main>
);

export default Home;
