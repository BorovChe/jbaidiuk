import Container from "@/components/Container";
import MyLifeImageList from "@/components/MyLife/MyLifeImageList";

const MyLife = () => {
  return (
    <section className="pt-20	">
      <Container>
        <h2 className="text-2xl mb-10	tracking-widest">Чим я живу</h2>
        <MyLifeImageList />
      </Container>
    </section>
  );
};

export default MyLife;
