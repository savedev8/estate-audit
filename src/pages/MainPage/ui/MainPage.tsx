import { HeroHomeOne } from '@/components/hero/HeroHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import MarqueeAreaHomeOne from '@/components/brand/MarqueeAreaHomeOne';
import { PortfolioHomeOne } from '@/components/portfolio/PortfolioHomeOne';
import { AwardsHomeOne } from '@/components/awards/AwardsHomeOne';
import { Testimonial } from '@/components/testimonial/Testimonial';
import { FunFactHomeOne } from '@/components/funfact/FunFactHomeOne';
import { VideoHomeOne } from '@/components/video/VideoHomeOne';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import SubscribeHomeOne from '@/components/subscribe/SubscribeHomeOne';
import { BrandHomeOne } from '@/components/brand/BrandHomeOne';

export const metadata = {
  title: "Estate Audit",
};

export const MainPage = () => {
  return (
        <>
        <HeroHomeOne />
        <MarqueeAreaHomeOne />
        <AboutHomeOne />
        <ServiceHomeOne />
        <PortfolioHomeOne />
        <AwardsHomeOne />
        <Testimonial />
        <FunFactHomeOne />
        <VideoHomeOne />
        <BlogHomeOne />
        <SubscribeHomeOne />
        <BrandHomeOne style_2={false} />
        </>
  );
};
