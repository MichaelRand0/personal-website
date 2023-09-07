import SectionPreview from "$components/sections/SectionPreview"

const Resume = () => {
  return (
    <main className="h-full">
      <div className="w-full">
        
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
        <section className="pt-20">
           asdas asda
        </section>
      </div>
    </main>
  )
}

export default Resume
