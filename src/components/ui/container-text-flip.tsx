"use client";

import React, { useState, useEffect, useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of word names to cycle through in the animation */
  words?: string[];
  /** Array of image names to cycle through in the animation */
  images?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Additional CSS classes to apply to the images */
  imageClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

const svgIcons = {
  gemini: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M25.0004 44c0-2.7667-.5335-5.3667-1.6006-7.8-1.0327-2.4334-2.4498-4.55-4.2496-6.35-1.7998-1.8-3.9168-3.2167-6.3502-4.25C10.3667 24.5333 7.76692 24 5 24c2.76692 0 5.3667-.5166 7.8-1.55 2.4334-1.0666 4.5504-2.5 6.3502-4.3 1.7998-1.8 3.2169-3.9166 4.2496-6.35 1.0671-2.43333 1.6006-5.03334 1.6006-7.8 0 2.76666.5164 5.36667 1.5498 7.8 1.0664 2.4334 2.4998 4.55 4.2996 6.35 1.8006 1.8 3.9168 3.2334 6.3502 4.3C39.6333 23.4834 42.2339 24 45 24c-2.7661 0-5.3667.5333-7.8 1.6-2.4334 1.0333-4.5496 2.45-6.3502 4.25-1.7998 1.8-3.2332 3.9166-4.2996 6.35-1.0334 2.4333-1.5498 5.0333-1.5498 7.8Z" fill="currentColor"></path></svg>`,
  perplexity: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M35.9906 4V15.6449H40.5V32.2934H35.9906V44L25.4563 33.6816V43.8076H23.4972V33.7291L13.0106 43.9998V32.2934H8.5V15.6449H13.0094V4.00017L23.4972 14.2719V4.8131H25.4563V14.3184L35.9906 4ZM22.1059 15.6449L14.9686 8.65459V15.6449H22.1059ZM13.0094 17.5946H10.4592V30.3436H13.0097L13.0107 26.5059L13.303 26.2195L22.1061 17.5968H13.0094V17.5946ZM14.9697 27.3227V39.3454L23.4972 30.9936V18.9708L14.9697 27.3227ZM25.4807 18.948V30.9697L34.0314 39.3452V32.2934H34.03L34.0313 27.3226L25.4807 18.948ZM35.9906 30.3436V26.506L35.6981 26.2195L26.895 17.5968H35.9906V17.5946H38.5408V30.3436H35.9906ZM34.0314 15.6449V8.65476L26.895 15.6449H34.0314Z" fill="currentColor"></path></svg>`,
  grok: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M42.3623 20.3718c.9197-2.7238.603-5.7076-.8677-8.1852-2.2119-3.80007-6.6584-5.75511-11.0011-4.83509-1.9319-2.14755-4.7075-3.36882-7.6174-3.35132-4.4389-.01-8.3775 2.81006-9.7431 6.97761-2.8516.5763-5.31303 2.3376-6.75341 4.8339-2.22833 3.7901-1.72034 8.5677 1.25669 11.8177-.91971 2.7238-.60301 5.7077.86777 8.1852 2.21185 3.8001 6.65845 5.7551 11.00105 4.8351 1.9306 2.1476 4.7075 3.3688 7.6174 3.3501 4.4415.0112 8.3813-2.8113 9.7469-6.9827 2.8516-.5762 5.313-2.3375 6.7534-4.8338 2.2258-3.7901 1.7166-8.5639-1.2592-11.814l-.0013.0025ZM27.125 41.386c-1.7773.0025-3.4989-.6113-4.8633-1.7351.0621-.0325.1698-.0912.2394-.1337l8.0722-4.6001c.413-.2313.6664-.665.6638-1.1338v-11.229l3.4116 1.9438c.0367.0175.0608.0525.0658.0925v9.299c-.005 4.1351-3.3988 7.4876-7.5895 7.4964Zm-16.3217-6.8789c-.89055-1.5176-1.21105-3.2963-.90575-5.0226.05954.035.16465.0987.23945.1412l8.0722 4.6001c.4091.2363.9159.2363 1.3263 0l9.8546-5.6151v3.8876c.0025.04-.0165.0787-.0481.1037l-8.1596 4.6489c-3.6345 2.065-8.2762.8375-10.3778-2.7438h-.0013ZM8.67887 17.1205c.88677-1.5201 2.28663-2.6826 3.95373-3.2864 0 .0688-.0038.19-.0038.2751v9.2014c-.0025.4675.2508.9013.6626 1.1325l9.8545 5.6139-3.4115 1.9438c-.0342.0225-.0773.0262-.1153.01l-8.1608-4.6526c-3.62693-2.0726-4.87095-6.6514-2.7807-10.2365l.00127-.0012Zm28.02963 6.4364-9.8546-5.6152 3.4116-1.9425c.0342-.0225.0773-.0263.1153-.01l8.1608 4.6488c3.6332 2.0713 4.8785 6.6577 2.7794 10.2428-.888 1.5175-2.2866 2.68-3.9525 3.285v-9.4764c.0038-.4675-.2483-.9-.6587-1.1325h-.0013Zm3.3951-5.0427c-.0595-.0362-.1647-.0987-.2394-.1412l-8.0722-4.6001c-.4092-.2363-.9159-.2363-1.3264 0L20.611 19.388v-3.8876c-.0025-.04.0165-.0787.0482-.1037l8.1596-4.6451c3.6345-2.06882 8.2812-.83754 10.3765 2.75.8855 1.5151 1.206 3.2889.9058 5.0126h.0025Zm-21.3472 6.9289-3.4128-1.9438c-.0367-.0175-.0608-.0525-.0659-.0925v-9.2989c.0026-4.14009 3.4065-7.49516 7.6022-7.49266 1.7748 0 3.4926.61501 4.857 1.73504-.0621.0325-.1685.09125-.2394.13375l-8.0722 4.60007c-.413.2313-.6663.6638-.6638 1.1326l-.0051 11.2264Zm1.8534-3.9425 4.3895-2.5013 4.3895 2.5v5.0014l-4.3895 2.5-4.3895-2.5v-5.0001Z" fill="currentColor"></path></svg>`,
  chatgpt: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M18.54 29.71 34.5 17.86c.78-.58 1.9-.35 2.27.55a13.24 13.24 0 0 1-2.82 14.4c-3.9 3.93-9.33 4.79-14.3 2.83l-5.42 2.52c7.78 5.35 17.22 4.03 23.12-1.91a18 18 0 0 0 4.78-16.92l.01.02c-1.96-8.5.49-11.9 5.5-18.85L48 0l-6.6 6.64v-.02l-22.87 23.1M15.24 32.59c-5.58-5.36-4.62-13.66.15-18.45a13.25 13.25 0 0 1 14.33-2.86l5.41-2.51a15.6 15.6 0 0 0-3.66-2.01 17.9 17.9 0 0 0-19.5 3.95 18.24 18.24 0 0 0-3.93 19.61c2.05 5-1.3 8.53-4.68 12.1-1.2 1.26-2.4 2.53-3.36 3.87l15.24-13.7" fill="currentColor"></path></svg>`,
  copilot: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M34.142 7.325A4.63 4.63 0 0 0 29.7 4H28.35a4.63 4.63 0 0 0-4.554 3.794L21.48 20.407l.575-1.965a4.63 4.63 0 0 1 4.444-3.33h7.853l3.294 1.282 3.175-1.283h-.926a4.63 4.63 0 0 1-4.443-3.325l-1.31-4.461Z" fill="currentColor"></path></svg>`,
  claude: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M29.05 98.54L58.19 82.19L58.68 80.77L58.19 79.98H56.77L51.9 79.68L35.25 79.23L20.81 78.63L6.82 77.88L3.3 77.13L0 72.78L0.340004 70.61L3.3 68.62L7.54 68.99L16.91 69.63L30.97 70.6L41.17 71.2L56.28 72.77H58.68L59.02 71.8L58.2 71.2L57.56 70.6L43.01 60.74L27.26 50.32L19.01 44.32L14.55 41.28L12.3 38.43L11.33 32.21L15.38 27.75L20.82 28.12L22.21 28.49L27.72 32.73L39.49 41.84L54.86 53.16L57.11 55.03L58.01 54.39L58.12 53.94L57.11 52.25L48.75 37.14L39.83 21.77L35.86 15.4L34.81 11.58C34.44 10.01 34.17 8.69 34.17 7.08L38.78 0.820007L41.33 0L47.48 0.820007L50.07 3.07001L53.89 11.81L60.08 25.57L69.68 44.28L72.49 49.83L73.99 54.97L74.55 56.54H75.52V55.64L76.31 45.1L77.77 32.16L79.19 15.51L79.68 10.82L82 5.2L86.61 2.16L90.21 3.88L93.17 8.12L92.76 10.86L91 22.3L87.55 40.22L85.3 52.22H86.61L88.11 50.72L94.18 42.66L104.38 29.91L108.88 24.85L114.13 19.26L117.5 16.6H123.87L128.56 23.57L126.46 30.77L119.9 39.09L114.46 46.14L106.66 56.64L101.79 65.04L102.24 65.71L103.4 65.6L121.02 61.85L130.54 60.13L141.9 58.18L147.04 60.58L147.6 63.02L145.58 68.01L133.43 71.01L119.18 73.86L97.96 78.88L97.7 79.07L98 79.44L107.56 80.34L111.65 80.56H121.66L140.3 81.95L145.17 85.17L148.09 89.11L147.6 92.11L140.1 95.93L129.98 93.53L106.36 87.91L98.26 85.89H97.14V86.56L103.89 93.16L116.26 104.33L131.75 118.73L132.54 122.29L130.55 125.1L128.45 124.8L114.84 114.56L109.59 109.95L97.7 99.94H96.91V100.99L99.65 105L114.12 126.75L114.87 133.42L113.82 135.59L110.07 136.9L105.95 136.15L97.48 124.26L88.74 110.87L81.69 98.87L80.83 99.36L76.67 144.17L74.72 146.46L70.22 148.18L66.47 145.33L64.48 140.72L66.47 131.61L68.87 119.72L70.82 110.27L72.58 98.53L73.63 94.63L73.56 94.37L72.7 94.48L63.85 106.63L50.39 124.82L39.74 136.22L37.19 137.23L32.77 134.94L33.18 130.85L35.65 127.21L50.39 108.46L59.28 96.84L65.02 90.13L64.98 89.16H64.64L25.49 114.58L18.52 115.48L15.52 112.67L15.89 108.06L17.31 106.56L29.08 98.46L29.04 98.5L29.05 98.54Z" fill="currentColor"></path></svg>`,
}
export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  images = ["googleAiOverviewsLogo"],
  interval = 3000,
  className,
  textClassName,
  imageClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);
  const imageRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (30px on each side)
      // @ts-ignore
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, images, interval]);

  return (
    <motion.p
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block rounded-lg pt-2 pb-3 text-center text-sm leading-tight md:text-5xl text-xl text-black dark:text-white",
        // "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
        // "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]",
        // "dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
        // "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
        className,
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block h-full align-middle", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div
          className={cn("inline-block h-full align-middle", imageClassName)}
          ref={imageRef}
          layoutId={`image-div-${images[currentImageIndex]}-${id}`}
        >
          {/* <div dangerouslySetInnerHTML={{ __html: svgIcons[images[currentImageIndex]] }} /> */}
          <div className="h-full">
          <svg className="h-10 w-10 md:h-8 md:w-8 mr-2"><use href={`/spritesheet.svg#${images[currentImageIndex]}`} xlinkHref={`/spritesheet.svg#${images[currentImageIndex]}`}></use></svg>

          </div>
        </motion.div>
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.p>
  );
}
