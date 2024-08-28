// import { HeroHomeFive } from '@/components/hero/HeroHomeFive';
// import { VideoHomeFive } from '@/components/video/VideoHomeFive';
// import { FunFactHomeOne } from '@/components/funfact/FunFactHomeOne';
import { FeatureHomeTwo } from '@/components/feature/FeatureHomeTwo';
// import { ServiceHomeFive } from '@/components/service/ServiceHomeFive';
// import { PortfolioHomeFive } from '@/components/portfolio/PortfolioHomeFive';
import { AwardsHomeOne } from '@/components/awards/AwardsHomeOne';
// import { Testimonial } from '@/components/testimonial/Testimonial';
// import { TeamHomeTwo } from '@/components/team/TeamHomeTwo';
// import { BrandHomeOne } from '@/components/brand/BrandHomeOne';
import { AboutHomeFour } from '@/components/about/AboutHomeFour';
// import { BlogHomeOne } from '@/components/blog/BlogHomeOne';

interface AdvanceItemType {
  subtitle: string;
  title: string;
  des: string;
  boxtitle: string;
  box_des_1: string;
  box_des_2: string;
  features: {
    id: number;
    title: string;
    des_1: string;
    des_2: string;
  }[];

  subtitle_2: string;
  title_2: string;
  button: string;
}

const feature_data: AdvanceItemType = {
  subtitle: `Авансовое соглашение`,
  title: `Заключаем предварительный договор купли-продажи и вносим аванс.`,
  des: `
  Данный договор демонстрирует серьезность намерений как продавца, так и покупателя, подчеркивая их готовность к сотрудничеству в процессе покупки квартиры. Этот документ отражает доверие между сторонами и их намерение обеспечить прозрачность и честность в сделке, что является важным аспектом успешного завершения процесса приобретения недвижимости.`,
  boxtitle: `Лучше аванс`,
  box_des_1: `Без задатка`,
  box_des_2: `Многие риэлторы советуют своим клиентам вносить аванс и избегать задатка`,
  features: [
    {
      id: 1,
      title: `Договор агенства`,
      des_1: `Полномочия сторон`,
      des_2: `Если продавца представляет агент - вносить аванс придётся в агентство под их договор, с которым нужно ознакомиться очень внимательно.`
    },
    {
      id: 2,
      title: `Размер аванса`,
      des_1: `Все индивидуально`,
      des_2: `Размер аванса составляе не более 10% от суммы сделки.`
    },
  ],

  // for home five 
  subtitle_2: `Why Choose Us`,
  title_2: `Maximizing Your Online Presence Digital Marketing Mastery`,
  button: ``

}
export interface LinkType {
  title: string;
  text: string;
  link: string;
}

const next_data: LinkType = {
    title: "Авансовое соглашение заключено?",
    text: "Перейдём к этапу №4",
    // поменять
    link: '/blog', 
}

export const MarketingAgencyPage = () => {
  return (
      <>
        {/* <HeroHomeFive /> */}
        {/* <VideoHomeFive /> */}
        {/* <ServiceHomeFive /> */}
        {/* // style_2={true}  */}
        <FeatureHomeTwo data={feature_data} /> 
        {/* <PortfolioHomeFive /> */}
        {/* <FunFactHomeOne style_2={true} /> */}
        {/* <AwardsHomeOne /> */}
        {/* <Testimonial /> */}
        {/* <TeamHomeTwo style_2={true} /> */}
        {/* <BrandHomeOne style_2={true} /> */}
        {/* <BlogHomeOne style_2={true} /> */}
        <AboutHomeFour next_data={next_data} />
      </>
  );
};
