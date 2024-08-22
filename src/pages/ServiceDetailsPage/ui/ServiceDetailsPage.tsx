import { AboutHomeFour } from '@/components/about/AboutHomeFour';
import { DetailsBanner } from '@/components/details/DetailsBanner';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import { HeroServiceDetails } from '@/components/hero/HeroServiceDetails';
import ServiceAreaDetails from '@/components/service/ServiceAreaDetails';

export const metadata = {
  title: "Service Details Estate Audit",
};

export interface LinkType {
  title: string;
  text: string;
  link: string;
}

const next_data: LinkType = {
    title: "Уже определились с объектом?",
    text: "Перейдём к этапу №2",
    link: '/creative-portfolio',
}
 

export const ServiceDetailsPage = () => {
  return (
      <>
        <HeroServiceDetails />
        {/* переиспользуемый */}
        <ServiceAreaDetails />
        {/* переиспользуемый */} 
        <DetailsBanner />
        {/* <ServiceDetailsFaq /> */}
        <AboutHomeFour next_data={next_data} />
      </>
  );
};