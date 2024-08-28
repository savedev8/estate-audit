// import { HeroHomeTwo } from '@/components/hero/HeroHomeTwo';
// import { VideoHomeTwo } from '@/components/video/VideoHomeTwo';
import { InnovativeHomeTwo } from '@/components/innovative/InnovativeHomeTwo';
// import { MarqueeAreaHomeTwo } from '@/components/brand/MarqueeAreaHomeTwo';
// import { FeatureHomeTwo } from '@/components/feature/FeatureHomeTwo';
// import { ServiceHomeTwo } from '@/components/service/ServiceHomeTwo';
// import { PortfolioHomeOne } from '@/components/portfolio/PortfolioHomeOne';
// import { AwardsHomeOne } from '@/components/awards/AwardsHomeOne';
// import { Testimonial } from '@/components/testimonial/Testimonial';
// import { TeamHomeTwo } from '@/components/team/TeamHomeTwo';
// import { BrandHomeOne } from '@/components/brand/BrandHomeOne';
// import { AboutUs } from '@/components/about/AboutUs';
// import { BlogHomeTwo } from '@/components/blog/BlogHomeTwo';
import { AboutHomeFour } from '@/components/about/AboutHomeFour';

export interface RegisterType {
  title: string;
  text: string;
  link: string;
}

const next_data: RegisterType = {
    title: "Новый объект зарегистрирован?",
    text: "Перейдём к этапу №7",
    link: '/design-studio',
}

export const StartupAgencyPage = () => {
  return (
      <>
        {/* <HeroHomeTwo /> */}
        {/* <VideoHomeTwo /> */}
        <InnovativeHomeTwo />

        {/* переиспользуемый компонент */}
        {/* <MarqueeAreaHomeTwo /> */}
        {/* переиспользуемый компонент */}
        {/* <FeatureHomeTwo /> */}
         {/* переиспользуемый компонент но с другими стилями */}
        {/* <ServiceHomeTwo /> */}
         {/* переиспользуемый компонент */}
        {/* <PortfolioHomeOne /> */}
        {/* переиспользуемый компонент */}
        {/* <AwardsHomeOne /> */}
        {/* <Testimonial /> */}
        {/* <TeamHomeTwo /> */}
        {/* <BrandHomeOne style_2={true} /> */}
        {/* <AboutUs /> */}
        {/* <BlogHomeTwo /> */}
        <AboutHomeFour next_data={next_data}/>
      </>
  );
};
