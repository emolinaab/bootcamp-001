import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  height: 30px;
  width: 100px;
`;

const Text = styled.p`
  font-weight: bold;
`;

const Navbar = ({ points, lives }) => {
  return (
    <Container>
      <Section>
        <Text>{`
            Lives: ${lives}
        `}</Text>
      </Section>

      <Section>
        <Text>{`
            Points: ${points}
        `}</Text>
      </Section>
    </Container>
  );
};

export default Navbar;
