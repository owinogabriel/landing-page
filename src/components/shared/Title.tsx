

interface TitleProps {
  children: React.ReactNode;
}

// Paragraph componet to be shared everytime when needed
export const Title = ({ children, }: TitleProps) => {
  return (
    <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl" >
      {children}
    </h1>
  )
}