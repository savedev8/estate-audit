import HeroHomeTwo from '@/components/hero/HeroHomeTwo';
import VideoHomeTwo from '@/components/video/VideoHomeTwo';
import InnovativeHomeTwo from '@/components/innovative/InnovativeHomeTwo';
import MarqueeAreaHomeTwo from '@/components/brand/MarqueeAreaHomeTwo';
import FeatureHomeTwo from '@/components/feature/FeatureHomeTwo';
import ServiceHomeTwo from '@/components/service/ServiceHomeTwo';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import Testimonial from '@/components/testimonial/Testimonial';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import AboutUs from '@/components/about/AboutUs';
import BlogHomeTwo from '@/components/blog/BlogHomeTwo';

export const metadata = {
  title: "Startup Agency - Creative Agency Next js Template",
};

export const StartupAgencyPage = () => {
  return (
      <>
        <HeroHomeTwo />
        <VideoHomeTwo />
        <InnovativeHomeTwo />
        <MarqueeAreaHomeTwo />
        <FeatureHomeTwo />
        <ServiceHomeTwo />
        <PortfolioHomeOne />
        <AwardsHomeOne />
        <Testimonial />
        <TeamHomeTwo />
        <BrandHomeOne style_2={true} />
        <AboutUs />
        <BlogHomeTwo />
      </>
  );
};
