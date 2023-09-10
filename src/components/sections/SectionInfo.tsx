import Container from "$components/Container"

interface Props extends React.ComponentProps<"div"> {
  title: string
}

function SectionInfo(props: Props) {
  const { children, title, className } = props
  return (
    <section>
      <Container className={`max-w-5xl w-full mx-auto !px-0 ${className}`}>
        <h2 className="text-3xl w-full mb-8 font-medium pl-10">{title}</h2>
        {children}
      </Container>
    </section>
  )
}

export default SectionInfo
