import { ScrollContext } from "@/app/providers/ScrollProvider";
import services_exploring from "@/shared/assets/img/services_exploring.jpg"
import sound_box_icon from "@/shared/assets/img/sound_box_icon.jpg"
import { AppImage } from "@/shared/ui/AppImage";
import { useContext } from "react";
import { Link } from "react-router-dom";

interface DataType {
  sub_title: string;
  title: string;
  service_data: {
    id: number;
    title: string;
  }[];
  notice_title: string;
  notice_des: string;
  notice_des_two: string;
}

const service_content: DataType = {
  sub_title: "Расчёт за квартиру",
  title: "Один из главных вопросов: безопасность расчетов по сделке",
  service_data: [
    {
      id: 1,
      title: "01 / Наличными из рук в руки",
    },
    {
      id: 2,
      title: "02 / Аренда депозитарной банковской ячейки",
    },
    {
      id: 3,
      title: "03 / Аккредитив",
    },
    {
      id: 4,
      title: "04 / Депозит нотариуса",
    },
    {
      id: 5,
      title: "05 / Сервис безопасных расчетов",
    },
    {
      id: 6,
      title: "06 / Обременение в пользу продавца.",
    },
  ],
  notice_title: `После регистрации сделки в Росреестре нужно получить документы и произвести расчет с продавцом одним из этих способов.`,
  notice_des: `Далее необходимо договориться о дне и времени передачи объекта. Важно! Перед передачей денег нужно убедиться, что все ранее зарегистрированные на жилплощади граждане уже выписаны. Доказательством будет служить чистая форма 9 по квартире.`,
  notice_des_two: `Ниже представлены самые распространенные варианты расчётов:`,
}
const {
  sub_title,
  title,
  service_data,
  notice_title,
  notice_des,
  notice_des_two,
} = service_content

export const ServiceHomeThree = () => {
  const context = useContext(ScrollContext);
  const scrollRefs: { [key: string]: (() => void) | undefined } = {
    1: context?.scrollToRefFirst,
    2: context?.scrollToRefSecond,
    3: context?.scrollToRefThird,
    4: context?.scrollToRefFourth,
    5: context?.scrollToRefFifth,
    6: context?.scrollToRefSixth,
  };
  return (
    <>
    <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="cs_service_exploring">
            <div className="cs_service_exploring_1">
              <div className="cs_section_heading cs_style_1">
                <div className="cs_section_heading_text">
                  <div className="cs_section_subtitle anim_div_ShowZoom">
                    {sub_title}
                  </div>
                  <h2 className="cs_section_title anim_heading_title">
                    {title}
                  </h2>
                  <p className="cs_font_16 pt-4">
                    {notice_des_two}
                  </p>
                </div>
              </div>
              <div className="cs_height_80 cs_height_lg_20"></div>

              <ul className="cs_list_style_none cs_color_1 anim_div_ShowLeftSide">

                {service_data.map((item, i) => {
                  const scrollToRef = scrollRefs[item.id.toString()];
                  return (

                  <li key={i} onClick={scrollToRef}>
                    <Link to='' >
                      <h3>{item.title}</h3>
                    </Link>
                  </li>
                  )
                }
                )}

              </ul>

            </div>

            <div className="cs_service_exploring_2">
              <div className="cs_service_exploring_img">
                <div className="anim_div_ShowRightSide">
                  <AppImage src={services_exploring} className="cs_img" alt="services_exploring" />
                </div>
                <div className="cs_service_exploring_img_text cs_style_1 cs_color_1 anim_div_ShowDowns">
                  <AppImage src={sound_box_icon} alt="sound_box_icon" />
                  <h6 className="cs_white_color">
                    {notice_title}
                  </h6>
                  <p className="cs_font_16">
                    {notice_des}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};
