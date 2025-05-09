import { services } from "../../utulis/services-data"
import { Service } from "../cards/Service"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/Title"


export const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title> Our AI Services</Title>
          <Paragraph>
            Unlock the potential of advanced machine learning, natural language
            processing, and predictive analytics. Our services include:
          </Paragraph>
        </div>

        {/* list of Servives */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3">
          {services.map((services, key) => (
            <Service
              key={key}
              title={services.title}
              description={services.description}
              icon={services.icon} />
          ))}
        </div>
      </Container>
    </section>
  )
}