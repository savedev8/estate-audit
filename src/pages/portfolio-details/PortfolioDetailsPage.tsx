import AboutHomeFour from '@/components/about/AboutHomeFour';
import PortfolioDetailsArea from '@/components/details/PortfolioDetailsArea';

export const metadata = {
  title: "Portfolio Details Estate Audit",
};

export const PortfolioPage = () => {
  return (
      <>
        <PortfolioDetailsArea />
        <AboutHomeFour />
      </>
  );
};
