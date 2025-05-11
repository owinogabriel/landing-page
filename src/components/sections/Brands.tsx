import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

// Array of brand logo names. These names  used to construct the image file paths.
const logos = [
  "discord",
  "openai",
  "paypal",
  "slack",
  "spotify",
  "youtube",
];

// Functional React component to display a section showcasing brand logos.
export const Brands = () => {
  return (
    <section>
      {/* Custom container component for consistent layout and spacing. */}
      <Container className="space-y-8">
        
        {/* centered the title and constrain its width. */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Custom title component displaying the section's heading. */}
          <Title>Trusted by Industry Leaderss</Title> 
        </div>

        {/* Div to arrange the logos in a flexible, centered, and wrapping layout with a gap. */}
        <div className="flex justify-center flex-wrap gap-4">

          {/* Mapping over the 'logos' array to render each brand logo. */}
          {logos.map((logo, key) => (
            // Each logo is contained within a div with padding, rounded corners, background, and border styles.
            <div
              key={key}
              className="p-4 rounded-xl bg-body border-box-border group"
            >

              {/* Image tag to display the brand logo. */}
              <img
                src={`assets/logos/${logo}.png`} // Dynamically constructing the image source path.
                alt="logo" 
                width="100"
                height="60"
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105 "
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};