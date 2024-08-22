import { HeroHomeFour } from '@/components/hero/HeroHomeFour';
import { ServiceHomeFour } from '@/components/service/ServiceHomeFour';
import PortfolioHomeFour from '@/components/portfolio/PortfolioHomeFour';
import { Testimonial } from '@/components/testimonial/Testimonial';
import { BlogHomeOne } from '@/components/blog/BlogHomeOne';
import { AboutHomeFour } from '@/components/about/AboutHomeFour';

export const metadata = {
  title: "Creative Protfolio Estate Audit",
};

export const CreativePortfolioPage = () => {
  return (
      <>
        {/* <HeroHomeFour /> */}
        {/* переиспользуемый с инверсией */}
        <ServiceHomeFour />
        <PortfolioHomeFour />
        <Testimonial />
        <BlogHomeOne style_2={true} />
        <AboutHomeFour />
      </>
  );
};
