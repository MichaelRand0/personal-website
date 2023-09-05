import Container from "$components/Container"
import LinesBg from "$components/LinesBg"
import SectionPreview from "$components/sections/SectionPreview"

const Resume = () => {
  return (
    <main className="h-screen">
      <Container className="max-w-5xl mx-auto">
        <LinesBg />
        <SectionPreview
          title="Резюме"
          routes={[
            {
              href: "/",
              text: "Главная",
            },
          ]}
          currentRoute="Резюме"
        />
      </Container>
    </main>
  )
}

export default Resume
