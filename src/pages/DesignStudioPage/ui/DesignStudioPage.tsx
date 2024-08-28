import { AboutHomeFour } from '@/components/about/AboutHomeFour';
// import { AboutUs } from '@/components/about/AboutUs';
import { AwardsHomeOne } from '@/components/awards/AwardsHomeOne';
// import { BlogHomeTwo } from '@/components/blog/BlogHomeTwo';
// import { BrandHomeOne } from '@/components/brand/BrandHomeOne';
// import MarqueeAreaHomeThree from '@/components/brand/MarqueeAreaHomeThree';
// import HeroHomeThree from '@/components/hero/HeroHomeThree';
// import JourneyHomeThree from '@/components/journey/JourneyHomeThree';
// import PortfolioHomeThree from '@/components/portfolio/PortfolioHomeThree';
import { ServiceHomeThree } from '@/components/service/ServiceHomeThree';
// import { TeamHomeTwo } from '@/components/team/TeamHomeTwo';
// import { Testimonial } from '@/components/testimonial/Testimonial';

import award_img_1 from "@/shared/assets/img/award_1.svg";
import award_img_2 from "@/shared/assets/img/award_2.svg";
import award_img_3 from "@/shared/assets/img/award_3.svg";

import award_thumb_1 from "@/shared/assets/img/award_thumb_1.jpg";
import award_thumb_2 from "@/shared/assets/img/award_thumb_2.jpg";
import award_thumb_3 from "@/shared/assets/img/award_thumb_3.jpg";

interface PaymentType {
  sub_title?: string;
  text?: string;
  award_data: {
    id: number;
    ward_img: any;
    img: string;
    brand: string;
    title: string;
    des: string;
  }[]
}

const payment_data: PaymentType = {
  sub_title: '',
  text: ``,
  award_data: [{
    id: 1,
    ward_img: award_img_1, // иконка наличных
    img: award_thumb_1, // фото наличных
    brand: `Наличные`,
    title: `Наличными из рук в руки `,
    des: `Дёшево и небезопасно. Также, стоит быть осторожными с наличными, чтобы избежать фальшивых купюр или недостатка денег. Рекомендуется принимать деньги в присутствии свидетелей, пересчитывать их и проверять на подлинность с помощью детектора банкнот, а также составлять расписку. Чтобы упростить процесс, лучше сразу пойти с покупателем в банк, где кассир проверит и зачислит деньги на счет продавца `,
  },
  {
    id: 2,
    ward_img: award_img_2,
    img: award_thumb_2,
    brand: `Ячейка в банке`,
    title: `Аренда депозитарной банковской ячейки`,
    des: `Стороны могут разместить деньги покупателя в банковской ячейке с присутствием сотрудника банка. Аренда ячейки стоит от 75 до 200 ₽ в день в зависимости от объема. Составляется соглашение, в котором прописываются условия выдачи денег продавцу после регистрации сделки, например, при предъявлении оригинала договора купли-продажи и выписки из ЕГРН. В случае несостоявшейся сделки покупатель может вернуть свои деньги.`,
  },
  {
    id: 3,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Аккредитив`,
    title: `Аккредитив в банке`,
    des: `Способ расчетов, при котором покупатель открывает в банке счет на свое имя и на него вносит деньги за квартиру. После завершения регистрации сделки банк проверяет документы и переводит эти деньги на счет продавца. Если регистрация не состоялась, деньги возвращаются покупателю. Аккредитив стоит около 2000 ₽.`,
  },
  {
    id: 4,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Нотариус`,
    title: `Депозит нотариуса.`,
    des: `Покупатель может внести деньги на депозитный счет нотариуса, который перечислит их продавцу после регистрации перехода права. Этот способ удобен для нотариальных сделок и стоит 1500 ₽, не включая стоимость услуг нотариуса за составление документов и банковские комиссии, которые зависят от банка.`,
  },
  {
    id: 5,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Специальный сервис`,
    title: `Сервис безопасных расчетов`,
    des: `Сервис безопасных расчетов, аналогичный аккредитиву, хранит деньги на номинальном счете специализированного сервиса по продаже недвижимости, например, «Домклик» или «Метр квадратный». Покупатель переводит деньги на счет сервиса при подписании договора купли-продажи. После регистрации права собственности сервис получает информацию из Росреестра и переводит деньги продавцу. Услуга стоит в среднем 2000 ₽. Основное преимущество — удобство: не требуется предоставление документов, достаточно просто ожидать перечисления средств.`,
  },
  {
    id: 6,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Обременение`,
    title: `Обременение в пользу продавца`,
    des: ` Если покупатель рассчитывается за квартиру с отсрочкой или рассрочкой платежа, хороший способ обезопасить себя — указать в договоре купли-продажи, что на недвижимость накладывается обременение в пользу продавца до полной выплаты ему стоимости квартиры. Об этом внесут запись в ЕГРН, и покупатель не сможет распоряжаться недвижимостью до полного расчета, хотя она и будет зарегистрирована на его имя.
    Чтобы снять обременение, обе стороны должны обратиться в Росреестр с соответствующим заявлением..`,
  },
]
}

export interface LinkType {
  title: string;
  text: string;
  link: string;
}

const next_data: LinkType = {
    title: "Расчёт за объект состоялся?",
    text: "Перейдём к последнему этапу",
    // поменять
    link: `/blog-details`,
}

export const DesignStudioPage = () => {
  return (
      <>
        {/* <HeroHomeThree /> */}
        {/* <JourneyHomeThree /> */}
        {/* классная лента */}
        {/* <MarqueeAreaHomeThree /> */}
        <ServiceHomeThree />
        {/* <PortfolioHomeThree /> */}

        {/* переиспользуемый */}
        <AwardsHomeOne data={payment_data} />
        {/* <Testimonial />
        <TeamHomeTwo /> */}
        {/* <AboutUs />
        <BrandHomeOne style_2={true} />
        <BlogHomeTwo /> */}
         <AboutHomeFour next_data={next_data} />
      </>
  );
};
