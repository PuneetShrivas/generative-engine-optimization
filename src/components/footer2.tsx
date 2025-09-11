import { Logo, LogoImage, LogoText } from "@/components/logo";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "/favicon.ico",
    alt: "Visibel logo",
    title: "Visibel",
    url: "https://visibel.ai",
  },
  tagline = "AI Visibility for Hotels, Restaurants & Agencies",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "/" },
        { text: "How It Works", url: "/how-it-works" },
        { text: "Pricing", url: "/pricing" },
        { text: "FAQ", url: "/faq" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { text: "Independent Hotels", url: "/hotels" },
        { text: "Restaurants", url: "/restaurants" },
        { text: "Hotel Groups", url: "/hotel-groups" },
        { text: "Marketing Agencies", url: "/agencies" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help Center", url: "/help" },
        { text: "AEO Guide", url: "/answer-engine-optimization" },
        { text: "GEO Guide", url: "/generative-engine-optimization" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "https://twitter.com/visibel_ai" },
        { text: "LinkedIn", url: "https://linkedin.com/company/visibel" },
      ],
    },
  ],
  copyright = "© 2025 Visibel. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
  ],
}: Footer2Props) => {
  return (
    <section className="mx-10">
      <div className="container border-t">
        <footer>
          <div className="pt-6 grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Logo url={logo.url}>
                  <LogoImage
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                  <LogoText className="text-xl">{logo.title}</LogoText>
                </Logo>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t py-4 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
