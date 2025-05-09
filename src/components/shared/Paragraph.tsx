

interface ParagraphrProps {
  children: React.ReactNode;
  className?: string;
}

// Paragraph componet to be shared everytime when needed
export const Paragraph = ({ children, className = "" }: ParagraphrProps) => {
  return (
    <p className={`text-heading-3 md:text-lg ${className}`} >
      {children}
    </p>
  )
}