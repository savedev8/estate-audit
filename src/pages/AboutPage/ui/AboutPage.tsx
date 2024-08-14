import { About } from '@/components/about/About';
import { AwardsHomeOne } from '@/components/awards/AwardsHomeOne';
import { BannerAbout } from '@/components/brand/BannerAbout';
import { BrandHomeOne } from '@/components/brand/BrandHomeOne';
import { FunFactHomeOne } from '@/components/funfact/FunFactHomeOne';
import { Gellary } from '@/components/gellary/Gellary';
import { TeamHomeTwo } from '@/components/team/TeamHomeTwo';
import { Testimonial } from '@/components/testimonial/Testimonial';
import { VideoHomeOne } from '@/components/video/VideoHomeOne';

export const metadata = {
  title: "About Estate Audit",
};

export const AboutPage = () => {
  return (
      <>
        <BannerAbout />
        <VideoHomeOne style_2={true} />
        <FunFactHomeOne style_3={true} />
        <About />
        <TeamHomeTwo style_2={true} style_3={true} />
        <AwardsHomeOne style_2={true} />
        <Testimonial />
        <Gellary />
        <BrandHomeOne />
      </>
  );
};
