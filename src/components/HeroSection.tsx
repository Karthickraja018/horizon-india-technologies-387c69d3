import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuoteModal } from "@/context/QuoteModalContext";
import industrialLabHero from "@/assets/industrial-lab-hero.png";

const HeroSection = () => {
  const { openQuoteModal } = useQuoteModal();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section id="home" className="relative w-full min-h-[90vh] lg:h-[900px] lg:max-h-screen bg-white overflow-hidden flex flex-col items-center">
      
      {/* Background Image Container with Fade Effect */}
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        variants={imageVariants}
        className="absolute inset-y-0 right-0 w-full lg:w-[75%] h-full z-0 opacity-20 lg:opacity-100"
      >
        <img
          src={industrialLabHero}
          alt="Industrial Material Testing Lab"
          className="w-full h-full object-cover"
        />
        {/* Desktop Gradient Fade: Moving fade closer to text to reveal more image */}
        <div className="hidden lg:block absolute inset-y-0 -left-1 w-full bg-gradient-to-r from-white via-white via-[15%] to-transparent z-10" />
        
        {/* Mobile Gradient Fade: Revealing more image at the bottom */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white via-white/70 via-20% to-transparent z-10" />
      </motion.div>

      {/* Content Side */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="w-full px-4 lg:px-8 xl:px-12 py-12 lg:py-0">
          <motion.div
             initial="hidden"
             animate="visible"
             transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
             className="w-full lg:max-w-[600px] xl:max-w-[750px]"
          >
            <motion.div variants={textVariants} className="space-y-6">
              <h1 className="h1 text-hero-headline leading-[1.1] text-gray-900">
                Reliable Material Testing Solutions for <span className="text-hero-accent inline-block mt-2">Industrial Quality Assurance</span>
              </h1>

              <p className="text-body-lg text-gray-700 font-medium max-w-xl text-lg sm:text-xl lg:text-2xl mt-4">
                Providing accurate, certified testing services for metals, plastics, and industrial applications.
              </p>
            </motion.div>

            <motion.div variants={textVariants} className="space-y-10 pt-10">
              <div className="flex flex-wrap gap-5 py-2">
                <button
                  type="button"
                  onClick={() => openQuoteModal({ productName: "Material Testing Services" })}
                  className="bg-hero-accent text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl shadow-hero-accent/30 hover:shadow-2xl hover:shadow-hero-accent/40 hover:-translate-y-1 active:translate-y-0"
                >
                  Request a Quote
                </button>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/90 backdrop-blur-sm border-2 border-hero-accent/20 text-hero-foreground font-bold text-lg hover:bg-white hover:border-hero-accent transition-all duration-300 shadow-lg shadow-black/5"
                >
                  Talk to an Engineer
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-8 gap-y-4 pt-8">
                {[
                  "NABL Certified",
                  "ISO 17025",
                  "25+ Years Experience"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-900 font-bold tracking-wide uppercase bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-hero-accent drop-shadow-sm" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

