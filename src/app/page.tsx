"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import { GridBackground } from "@/components/ui/grid-background";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Timeline } from "@/components/ui/timeline";
import { Pricing2 } from "@/components/pricing2";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Footer2 } from "@/components/footer2";
import { Spotlight } from "@/components/ui/Spotlight";
import { Contact7 } from "@/components/contact7";
import { Boxes } from "@/components/ui/background-boxes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { ArrowRight, Monitor, Moon, Sun } from "lucide-react";
import { RotatingTextContainer, RotatingText } from "@/components/animate-ui/primitives/texts/rotating";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ThemeToggler } from "@/components/animate-ui/primitives/effects/theme-toggler";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Card } from "@/components/ui/card";
import CompareResponse from "@/components/compareResponse";
import WhoWeServe from "@/components/whoWeServe";
import { AnimatedTestimonialsDemo } from "@/components/testimonials";
import { FeaturesSectionDemo } from "@/components/metrics";
import { BentoGridThirdDemo } from "@/components/integrations";
import { WavyBackground } from "@/components/ui/wavy-background";
import { BackgroundBeams } from "@/components/ui/background-beams";

const ContainerTextFlipDemo = () => {
  const words = ["Gemini", "ChatGPT", "Grok", "Claude", "Perplexity", "Copilot", "and more..."];
  const images = ["google-ai-overviews-logo", "chatgpt-logo", "grok-logo", "claude-logo", "perplexity-logo", "microsoft-copilot-logo", "more"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        " relative text-sm text-center leading-tight md:text-5xl text-xl",
        "text-foreground",
      )}
      layout
    >
      <div className="inline-block items-center text-center">
        Get your restaurant mentioned by <br /> <ContainerTextFlip words={words} images={images} />
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}

const HeroScrollDemo = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="max-w-5xl mx-auto text-center mb-8 relative z-2 ">
        <h2 className="text-3xl font-bold text-foreground z-20">Meet your AI visibility command center.</h2>
        <p className="text-xl text-foreground/80 z-20">Every query. Every mention. Every opportunity.</p>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 1.2,
        }}
        className="relative z-2 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
          <img
            src="ss.webp"
            alt="Landing page preview"
            className="aspect-[16/9] h-auto w-full object-cover"
            height={1000}
            width={1000}
          />
        </div>
      </motion.div>
    </div>
  );
}

const Workflows = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="max-w-5xl mx-auto text-center relative z-2 ">
        <div className="text-center mt-6 mb-4">
          {/* <HeroHighlight> */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="px-4 md:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            High-impact content,{" "}
            <Highlight className="text-black dark:text-white">
              on autopilot.
            </Highlight>
          </motion.h1>
          {/* </HeroHighlight> */}
        </div>
        <p className="text-xl text-foreground/80 z-20"> Stop guessing what to publish. Deploy proven workflows mapping to traveler questions everyday</p>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 1.2,
        }}
        className="relative z-2 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
          <img
            src="ss2.webp"
            alt="Landing page preview"
            className="aspect-[16/9] h-auto w-full object-cover"
            height={1000}
            width={1000}
          />
        </div>
      </motion.div>
    </div>
  );
}


const SectionCards = () => {
  return (
    <div className="flex flex-col gap-4 py-10 mb-4 relative z-20">
      <div className="text-center mt-6 mb-4">
        {/* <HeroHighlight> */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="px-4 md:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Two engines. One outcome.{" "}
          <Highlight className="text-black dark:text-white">
            More direct bookings.
          </Highlight>
        </motion.h1>
        {/* </HeroHighlight> */}
      </div>

      <div className="flex flex-row space-x-10 mb-4 items-center mx-auto">
        <CardSpotlightDemo />
        <CardSpotlightDemoRight />
      </div>
    </div>
  );
}
const CardSpotlightDemo = () => {
  return (
    <CardSpotlight className="h-[270px] w-[500px]">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        AEO - Answer Engine Optimization
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        Structures your site for AI to quote:
        <ul className="list-none  mt-2">
          <Step title="Traveler-style FAQs by room type, amenities, etc." />
          <Step title="Neighborhood, attraction, and route guides" />
          <Step title="Rich schema (LocalBusiness, Hotel, FAQ, Reviews)" />
          <Step title="Fast, clear answers in 2–3 sentences, how AI prefers" />
        </ul>
      </div>
    </CardSpotlight>
  );
}
const CardSpotlightDemoRight = () => {
  return (
    <CardSpotlight className="h-[270px] w-[500px]" right={true}>
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        GEO – Generative Engine Optimization
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        Get talked about by LLMs so you’re chosen more.
        <ul className="list-none  mt-2">
          <Step title="Strategic brand mentions in Agentic search" />
          <Step title="High-signal reviews + consistency across major LLMs" />
          <Step title="Model trust that convinces AI models to pick you" />
          <Step title="Multilingual coverage for EU and global travelers" />
        </ul>
      </div>
     
    </CardSpotlight>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default function Page() {
  const navItems = [
    {
      name: "How it Works",
      link: "#how-it-works",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Resources",
      link: "#resources",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Get your brand mentioned by: Gemini · ChatGPT · Grok · Perplexity · more.
        </p>
        <Button className="mt-2" variant="default">
          Free AI Visibility Audit <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </StickyBanner> */}

      <div className={cn("relative w-full ")}>
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              {/* <NavbarButton variant="secondary"><Link href="/auth/login">Login</Link></NavbarButton> */}
              <NavbarButton variant="primary">
                <Link href="/auth/login">Get Score</Link>
              </NavbarButton>
              <NavbarButton variant="empty">
                <ModeToggle />
              </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  <Link href="/auth/login">Login</Link>
                </NavbarButton>
                <ModeToggle />

              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
        <PageContent />
        <div className="relative flex flex-col h-full w-full items-center justify-center bg-white dark:bg-black">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <CompareResponse />
          <HeroScrollDemo />
          <SectionCards />
          <Workflows />
          <BentoGridThirdDemo />
          <FeaturesSectionDemo />
          <WhoWeServe />
          <AnimatedTestimonialsDemo />
          <FinalCTA />
        </div>

      </div>
      <Footer2 />
    </div>
  );
}

const PageContent = () => {
  return (
    <div >
      <Hero />
      <div className="relative flex  w-full items-center justify-center bg-background">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text ">
          {/* <TimelineDemo /> */}
        </p>
      </div>
    </div>
  );
};

const FinalCTA = () => {
  return (
<div className="max-w-5xl mx-auto py-10">
    <div className="h-full py-10 min-w-5xl rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Own the top slot in AI answers.
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
          Start with a free Brand AI Visibility Score and a punch-list of actions to win your city&apos;s most valuable queries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 relative z-10">
          <Button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg">
            Get My Free Score <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="px-6 py-2 border border-neutral-700 text-neutral-300 rounded-lg hover:bg-neutral-800">
            Talk to an Expert
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
    </div>
  );
};


const Hero = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="h-[500px] relative w-full overflow-hidden bg-background flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="mx-40 z-20 flex flex-col space-y-2 items-center">
        <div className="flex flex-row items-center justify-center align-middle mb-2 text-foreground/70 space-x-6">
          <p>GDPR-ready</p>
          <span className="text-foreground/70">|</span>
          <p>Works with your CMS</p>
          <span className="text-foreground/70">|</span>
          <p>Fast setup</p>
        </div>
        <ContainerTextFlipDemo />
        <p className="text-lg mt-2 text-center text-foreground relative z-20 max-w-xl">
          Travelers don’t “search” anymore - they ask. <br /> Reach millions searching for their next restaurant recommendation.
        </p>
        <div className="flex flex-row items-center justify-center align-middle gap-6">
          <Button className=" mt-4 w-fit h-9"><Link className='flex flex-row gap-2' href="/auth/sign-up">Get Free Score <ArrowRight /> </Link></Button>
          <Button className=" mt-4 w-fit h-9" variant="secondary"><Link className='flex flex-row gap-2' href="/auth/sign-up">How it Works </Link></Button>
        </div>
      </div>
    </div>
  );
}


