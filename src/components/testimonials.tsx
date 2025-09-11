import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Visibel AI transformed our hotel's online presence. We're now consistently mentioned in AI responses, and our direct bookings have increased by 35%.",
      name: "David Thompson",
      designation: "Hotel Manager at Seaside Luxury Resort",
      src: "https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?q=80&w=1220&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The GEO optimization features are exceptional. Our boutique hotel now appears in ChatGPT recommendations for our area, driving significant direct booking traffic.",
      name: "Michael Rodriguez",
      designation: "Owner at Urban Retreat Hotels",
      src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "As a marketing agency specializing in hospitality, Visibel AI has become our secret weapon. Our clients are thrilled with improved visibility across AI platforms like Grok.",
      name: "Michael Johnson",
      designation: "CEO at Hospitality Marketing Solutions",
      src: "https://images.unsplash.com/photo-1596641199019-b149463ec518?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The ROI has been incredible. Our resort chain invested in Visibel AI and saw direct bookings increase by 40% as our properties began appearing in AI travel recommendations.",
      name: "James Kim",
      designation: "Director of Digital Strategy at Luxury Resorts Group",
      src: "https://images.unsplash.com/photo-1706622523339-70191f908a1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
