import React, { useId } from "react";
import { cn } from "@/lib/utils";
import { Mail, MessageCircle, Globe2, Database, Calendar, BarChart3, Zap } from "lucide-react";
import { IconBulb } from "@tabler/icons-react";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const features = [
  {
    title: "Mentions",
    description: "The frequency of mentions across the top AI platforms.",
    icon: <Mail className="h-8 w-8" />,
  },
  {
    title: "Prominence",
    description: "The position of your name within answers.",
    icon: <MessageCircle className="h-8 w-8" />,
  },
  {
    title: "Coverage",
    description: "The percentage of priority queries you appear in.",
    icon: <Globe2 className="h-8 w-8" />,
  },
  {
    title: "Trust signals",
    description: "The strength of reviews, citations, and consistency.",
    icon: <IconBulb className="h-8 w-8" />,
  },
];

const integrations = [
  {
    name: "WordPress",
    icon: <Globe2 className="h-6 w-6" />,
    description: "CMS Platform"
  },
  {
    name: "Framer",
    icon: <Zap className="h-6 w-6" />,
    description: "Design Tool"
  },
  {
    name: "Squarespace",
    icon: <Database className="h-6 w-6" />,
    description: "Website Builder"
  },
  {
    name: "Webflow",
    icon: <Globe2 className="h-6 w-6" />,
    description: "Visual Development"
  },
  {
    name: "React",
    icon: <Zap className="h-6 w-6" />,
    description: "Frontend Library"
  },
  {
    name: "PHP",
    icon: <Globe2 className="h-6 w-6" />,
    description: "Server-side Scripting"
  },
  {
    name: "Next.js",
    icon: <Zap className="h-6 w-6" />,
    description: "React Framework"
  },
  {
    name: "Shopify",
    icon: <Database className="h-6 w-6" />,
    description: "E-commerce Platform"
  },
  
];

export function FeaturesSectionDemo() {
  return (
    <div className="py-20 lg:py-20 max-w-5xl">
        <div className="text-center relative z-2">
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
          Your new north star metric - {" "}
          <Highlight className="text-black dark:text-white">
          AI Visibility Score. 
          </Highlight>
          
        </motion.h1>
        {/* </HeroHighlight> */}
      </div>

      <div className="flex relative z-2 items-center gap-4 mt-5 mb-5 relative z-2">
        <div className="flex flex-row items-center w-full mx-auto">
          <div className="bg-black flex flex-row justify-center w-full max-w-xl mx-auto">
            <input
              type="text"
              className="w-full px-4 py-2 text-sm font-medium text-foreground bg-foreground-100 border border-foreground-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
              placeholder="https://www.yourwebsite.com"
            />
            <button
              className="px-4 py-2 text-sm min-w-[180px] font-medium bg-foreground text-black rounded-r-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
            >
              Analyze Your AI Score
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      
      {/* Integrations Section */}
      <div className="mt-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            We work with{" "}
          <Highlight className="text-black dark:text-white">
          your tech stacks. 
          </Highlight>
          </h2>
          
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto px-4">
          {integrations.map((integration, index) => (
            <IntegrationBadge key={integration.name} {...integration} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-black border-t rounded-md lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

const IntegrationBadge = ({
  name,
  icon,
  description,
  index,
}: {
  name: string;
  icon: React.ReactNode;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.4, 0.0, 0.2, 1]
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <div className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600">
        {/* Icon with animated background */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
          <div className="relative z-10 p-2 text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {icon}
          </div>
        </div>
        
        {/* Text content */}
        <div className="flex flex-col">
          <span className="font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {name}
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors duration-300">
            {description}
          </span>
        </div>
        
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      
      {/* Floating particles effect on hover */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-100" />
      </div>
    </motion.div>
  );
};

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

