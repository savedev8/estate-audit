import AboutUs from '@/components/about/AboutUs';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import BlogHomeTwo from '@/components/blog/BlogHomeTwo';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import MarqueeAreaHomeThree from '@/components/brand/MarqueeAreaHomeThree';
import HeroHomeThree from '@/components/hero/HeroHomeThree';
import JourneyHomeThree from '@/components/journey/JourneyHomeThree';
import PortfolioHomeThree from '@/components/portfolio/PortfolioHomeThree';
import ServiceHomeThree from '@/components/service/ServiceHomeThree';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import Testimonial from '@/components/testimonial/Testimonial';

export const metadata = {
  title: "Design Studio - Creative Agency Next js Template",
};

export const DesignStudioPage = () => {
  return (
      <>
        <HeroHomeThree />
        <JourneyHomeThree />
        <MarqueeAreaHomeThree />
        <ServiceHomeThree />
        <PortfolioHomeThree />
        <AwardsHomeOne />
        <Testimonial />
        <TeamHomeTwo />
        <AboutUs />
        <BrandHomeOne style_2={true} />
        <BlogHomeTwo />
      </>
  );
};
