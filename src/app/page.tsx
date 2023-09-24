import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import DataGrid from "@/components/DataGrid";

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <DataGrid />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
