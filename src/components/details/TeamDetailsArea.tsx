import avatar_img_1 from "@/shared/assets/img/team_detalils.jpg";
import finalDogovor from "@/data/finished dogovor.webp";
import document from '@/data/dogovor.docx';
import { ReactNode } from "react";
import { AppImage } from "@/shared/ui/AppImage";

interface DataType {
  des: string;
  des_two: ReactNode;
  des_three: string;
  des_four: string;
  info: {
    title: string;
    des: string;
  }[];
  des_five: string;
  des_six: string;
  des_seven: string;
  des_eight: string;
}

const team_content: DataType = {
  des: `После того как убедились, что собственники и недвижимость чисты, договариваемся на заключение основного договора купли-продажи – в данном договоре прописывается покупаемый объект и условия покупки.`,
  des_two: 
  <>Договор купли-продажи квартиры может быть только письменным. Его можно написать от руки,  
  <a href={document} download="dogovor.docx" 
    style={{ color: 'blue', textDecoration: 'underline' }}>
    скачать образец </a>в интернете или составить у нотариуса.
  </>,
  des_three: `Любой договор купли-продажи можно заверить у нотариуса добровольно для собственного спокойствия и дополнительной правовой экспертизы сделки. Договор обязательно заверять, если вы продаете или покупаете:`,
  info: [
    {
      title: `Долю в квартире:`,
      des: `Но если все собственники одновременно продают свои доли в квартире по одному договору, то к нотариусу можно не обращаться.`
    },
    {
      title: `Квартиру вашего ребенка или опекаемого человека.`,
      des: ``
    },
    {
      title: `Квартиру с пожизненной рентой.`,
      des: ``
    },
  ],
  des_four: `Договор купли-продажи квартиры вступает в силу с момента подписания. Чтобы официально владеть квартирой, зарегистрируйте право собственности в Росреестре.`,
  des_five:
  `Документы. Перечень документов для государственной регистрации права собственности индивидуален в каждом случае. Уточняйте его в МФЦ, региональном управлении Росреестра или по телефону 8 (800) 100-34-34.`,
  des_six:`
  В любом случае для регистрации сделки понадобятся паспорта всех продавцов и покупателей — физических лиц или учредительные документы юридических лиц, оригиналы и копии договора купли-продажи.`,
  des_seven:`
  Документы, которые нужны для проверки юридической чистоты квартиры, и документы для государственной регистрации — это два разных комплекта. Мы рассказываем только о документах, которые попросят для государственной регистрации права собственности.`,
  des_eight:`
  Список для проверки юридической чистоты квартиры будет совсем другим.`
}

const { des, des_two, des_three, des_four, des_five, des_six, des_seven, des_eight, info } = team_content

export const TeamDetailsArea = () => (
  <>
    <div className="cs_height_219 cs_height_lg_120"></div>

    <section>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_text anim_text_writting">
            <h2 className="cs_section_title">
              Подписываем договор купли-продажи
            </h2>
          </div>
        </div>
      </div>
    </section>

    <div className="cs_height_100 cs_height_lg_60"></div>
    <div className="container">
      <div className="row">
        {/* можно картинку заменить */}
        <div className="col-md-5">
          <AppImage src={finalDogovor} alt="team_detalils" />
          <div className="cs_height_lg_30"></div>
        </div>
        <div className="col-md-7">
          <div className="cs_team_details">
            <div className="cs_team_details_text">
              <p>{des}</p>
              <div className="cs_height_50 cs_height_lg_50"></div>

              <p>{des_two}</p>
              <div className="cs_height_50 cs_height_lg_50"></div>

              <p>{des_three}</p>
              <div className="cs_height_50 cs_height_lg_50"></div>

              {info.map((item, i) => <div key={i} className="d-flex">
                <p className="col-md-4 col-4 cs_medium cs_primary_color">
                  {item.title}
                </p>
                <p className="col-md-4 col-10">{item.des}</p>
              </div>
              )}
              <p>{des_four}</p>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <p>{des_five}</p>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <p>{des_six}</p>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <p>{des_seven}</p>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <p>{des_eight}</p>
              <div className="cs_height_50 cs_height_lg_50"></div>
            </div>
            {/* <div className="cs_height_50 cs_height_lg_50"></div> */}
            {/* //переиспользуемый блок */}
            {/* <div className="cs_btn cs_style_2">
              <a target='_blank' href="https://behance.com" className="cs_center">Behance</a>
              <a target='_blank' href="https://dribbble.com" className="cs_center">Dribbble</a>
              <a target='_blank' href="https://github.com" className="cs_center">Github</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    {/* <div className="cs_height_150 cs_height_lg_60"></div> */}
  </>
);
