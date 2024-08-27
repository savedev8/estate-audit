// import { HeroHomeFour } from '@/components/hero/HeroHomeFour';
import { ServiceHomeFour } from '@/components/service/ServiceHomeFour';
// import PortfolioHomeFour from '@/components/portfolio/PortfolioHomeFour';
// import { Testimonial } from '@/components/testimonial/Testimonial';
// import { BlogHomeOne } from '@/components/blog/BlogHomeOne';
import { AboutHomeFour } from '@/components/about/AboutHomeFour';
import { Text } from '@/shared/ui/Text/Text';

interface ConditionItem {
  id: number;
  title: string;
  des: string;
  features?: string[];
  anchor?: string;
}[]

const condition_data: ConditionItem[] = [
  {
    id: 1,
    title: `Цена и торг`,
    des: `Крайние этажи, соседство с нежилыми объектами или непривлекательные виды из окон уже повод для торга. Цель-придти к окончательной цене по объекту.`,
    anchor: 'target-1'
  },
  {
    id: 2,
    title: `Форма расчётов`,
    des: `Наиболее распространенными формами расчётов на вторичке являются:`,
    features: [
      `Банковская ячейка`,
      `Банковский аккредитив`,
      `Депозит нотариуса`,
      `Эскроу-счета`,
      `Наличная форма расчёта`
    ],
  },
  {
    id: 3,
    title: `Сроки сделки`,
    des: `При обсуждении сроков сделки нужно учесть срок регистрации договора в различных органах и госструктурах`,
  },
  {
    id: 4,
    title: `Проверка базовых документов перед авансированием`,
    des: `Перед внесением аванса необходимо проверить достоверность паспорта, выписки ЕГРН и ещё некоторых документов и внести аванс`
  },
]

export interface LinkType {
  title: string;
  text: string;
  link: string;
}

const next_data: LinkType = {
    title: "Обсудили условия сделки?",
    text: "Перейдём к этапу №3",
    // поменять
    link: '/marketing-agency', 
}

export const CreativePortfolioPage = () => {
  return (
      <>
        {/* <HeroHomeFour /> */}
        {/* переиспользуемый с инверсией */}
        <ServiceHomeFour />
        {/* <PortfolioHomeFour /> */}
        {/* <Testimonial /> */}
        {/* <BlogHomeOne style_2={true} /> */}

        {/* вынести в отдельный компонент */}
        {condition_data && condition_data?.map((item, key) => (
          <Text key={item.id} id={item.id} title={item.title} text={item.des} features={item?.features} />
        ))}
        <AboutHomeFour next_data={next_data} />
      </>
  );
};
