import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroService from '@/components/hero/HeroService';
import Service from '@/components/service/Service';
import { Testimonial } from '@/components/testimonial/Testimonial';

export const metadata = {
  title: "Service Estate Audit",
};

export const ServicePage = () => {
  return (
      <>
        <HeroService />
        <Service />
        <Testimonial style_service={true} />
        <AboutHomeFour />
      </>
  );
};