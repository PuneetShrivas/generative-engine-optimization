import { GlareCard } from "@/components/ui/glare-card";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Globe2, Mail, MessageCircle } from "lucide-react";
import { IconBulb } from "@tabler/icons-react";

 
const WhoWeServe = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 mb-4">
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
          Who We Serve - {" "}
          <Highlight className="text-black dark:text-white">
          and supported platforms. 
          </Highlight>
          
        </motion.h1>
        {/* </HeroHighlight> */}
      </div>
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 py-4 gap-4">
        {projects.map((project, idx) => (
          <a
            href={project.link}
            key={idx}
            className="relative group block h-full w-full"
          >
            <GlareCard className="flex flex-col items-start justify-end py-8 pl-6 pr-20 relative">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                style={{ 
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), transparent), url(${project.backgroundImage || '/default-bg.jpg'})` 
                }}
              />
              {project.icon && (
                <div className="text-white flex-shrink-0 mb-4 relative z-10">
                  {project.icon}
                </div>
              )}
              <p className="font-bold text-white text-lg relative z-10">{project.title}</p>
              <p className="font-normal text-base text-neutral-200 mt-4 relative z-10">{project.description}</p>
            </GlareCard>
          </a>
        ))}
      </div>
      

    </div>
  );
}
export const projects = [
  {
    title: "Independent Hotels",
    description: "Increase direct bookings by appearing in AI travel recommendations.",
    link: "#",
    icon: <IconBulb className="h-8 w-8" />,
    backgroundImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Restaurants",
    description: "Get recommended by AI when diners ask about local cuisine.",
    link: "#",
    icon: <Mail className="h-8 w-8" />,
    backgroundImage: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: "Hotel Groups",
    description: "Scale AI visibility across all your properties and locations.",
    link: "#",
    icon: <Globe2 className="h-8 w-8" />,
    backgroundImage: 'https://images.unsplash.com/photo-1633976700612-771a0bee1556?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: "Marketing Agencies",
    description: "Offer AI visibility as a high-value service to your clients from AI platforms.",
    link: "#",
    icon: <MessageCircle className="h-8 w-8" />,
    backgroundImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

export default WhoWeServe;