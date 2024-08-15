import { AboutHomeFour } from '@/components/about/AboutHomeFour';
import DetailsBanner from '@/components/details/DetailsBanner';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
import ServiceAreaDetails from '@/components/service/ServiceAreaDetails';

export const metadata = {
  title: "Service Details Estate Audit",
};

export const ServiceDetailsPage = () => {
  return (
      <>
        <HeroServiceDetails />
        <ServiceAreaDetails />
        <DetailsBanner />
        <ServiceDetailsFaq />
        <AboutHomeFour />
      </>
  );
};