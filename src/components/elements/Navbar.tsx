import { Container } from "../shared/Container"; // Import the Container component
import logo from "../../assets/logos/icon.svg"; // Import the logo image
import { NavItem } from "../shared/NavItem"; // Import the NavItem component

import { useThemeStore } from "../../store/ThemeStore"; // Import the Zustand theme store
import { BtnLink } from "../shared/BtnLinks"; // Import the button link component

// Define the navigation items (href and text)
export const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#pricing", text: "Pricing" },
];

// Define the Navbar component
export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore(); // Get theme state and toggle function

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      {/* Header element, positioned absolutely at the top */}
      <Container>
        {/* Use the Container component for consistent padding and centering */}
        <nav className="w-full flex justify-between gap-6 relative">
          {/* Navigation element, flexbox for layout, relative positioning */}
          
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            {/* Container for the logo and brand name, inline-flex for alignment */}
            <a href="/" className="relative flex items-center gap-3">
              {/* Link to the home page, flexbox for vertical alignment */}
              <img src={logo} alt="EdgeAI Logo" className="w-10 h-10" />
              {/* Logo image, with width and height */}
              <div className="inline-flex text-lg font-semibold text-heading-1">
                {/* Brand name, styled with text properties */}
                EdgeAI
              </div>
            </a>
          </div>

          {/* Navigation links and button */}
          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                       absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent 
                       border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
          >
            {/* Flex container for nav items and button.
                * Mobile: column, absolute, full-width, hidden overflow.
                * Desktop: row, static, transparent background, visible overflow.
                */}
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                         pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 
                         text-lg text-heading-2 w-full lg:justify-center lg:items-center"
            >
              {/* Unordered list for navigation items.
                * Mobile: border-top, padding.
                * Desktop: no border, no padding, row layout, centered.
                */}
              {navItems.map((item, key) => (
                // Map through the navItems array to render each item
                <NavItem href={item.href} text={item.text} key={key} />
                // Render the NavItem component, passing href and text props
              ))}
            </ul>
            <div
              className="lg:min-w-max flex items-center sm:w-max w-full pb-6 
                         lg:pb-0 border-b border-box-border lg:border-0
                         px-6 lg:px-0"
            >
              {/* Container for the "Get Started" button.
                * Mobile: full-width, padding, bottom border.
                * Desktop: min-width, no padding, no border.
                */}
              <BtnLink text="Get Started" href="#cta" className="" />
              {/* Render the button link component */}
            </div>
          </div>

          {/* Theme toggle button */}
          <div className="min-w-max flex items-center gap-x-3">
            <button
              onClick={toggleTheme}
              className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
            >
              {/* Button to toggle the theme (light/dark).
                * Styled as a circular button with padding and border.
                */}
              {theme === "dark" ? (
                // Render a moon icon if the current theme is dark
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                // Render a sun icon if the current theme is light
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
