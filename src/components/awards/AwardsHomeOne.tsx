import { useContext, useState } from 'react';
import award_img_1 from "@/shared/assets/img/award_1.svg";
import award_img_2 from "@/shared/assets/img/award_2.svg";
import award_img_3 from "@/shared/assets/img/award_3.svg";

import award_thumb_1 from "@/shared/assets/img/award_thumb_1.jpg";
import award_thumb_2 from "@/shared/assets/img/award_thumb_2.jpg";
import award_thumb_3 from "@/shared/assets/img/award_thumb_3.jpg";
import { AppImage } from '@/shared/ui/AppImage';
import { Icon } from '@/shared/ui/Icon';
import * as cls from './AwardHomeOne.module.scss';
import { ScrollContext } from '@/app/providers/ScrollProvider';

interface DataType {
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

const award_service: DataType = {
  sub_title: 'Our Awards',
  text: `Recognizing Excellence Our Award Winning Work`,
  award_data: [{
    id: 1,
    ward_img: award_img_1,
    img: award_thumb_1,
    brand: `Dribbbble`,
    title: `IOS App Design Award`,
    des: `Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design.`,
  },
  {
    id: 2,
    ward_img: award_img_2,
    img: award_thumb_2,
    brand: `Envato`,
    title: `Elite Author Award`,
    des: `Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design.`,
  },
  {
    id: 3,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Awwward`,
    title: `CSS Design Award`,
    des: `Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design.`,
  },
]
}

export const AwardsHomeOne = ({style_2, data}: { style_2?: any; data?: DataType }) => {
  const [activeTab, setActiveTab] = useState(0);
  const context = useContext(ScrollContext)
  const handleMouseEnter = (index: any) => {
    setActiveTab(index);
  };

    const refs: { [key: string]: React.RefObject<HTMLDivElement> | undefined } = {
        1: context?.firstRef,
        2: context?.secondRef,
        3: context?.thirdRef,
        4: context?.fourthRef,
        5: context?.fifthRef,
        6: context?.sixthRef,
      };
      let endedData;
      if(data) {
        endedData = data;
      } else {
        endedData = award_service;
      }
      const {
        sub_title,
        text,
        award_data
      } = endedData;
  
  return (
    <>
    {style_2 ? <div className="cs_height_145 cs_height_lg_60"></div> : null}
      <section>
        <div className="container">
          <div className={`${data ? 'd-none' : 'cs_section_heading cs_style_1 cs_type_1 swiper-slide swiper-slide-active'}`}>
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                {sub_title}
              </div>
              <h2 className="cs_section_title anim_heading_title">
                {text}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_2_list">
            {award_data.map((item, i) => {
              const currentRef = refs[item.id] || null;
              return (
              <div key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                className={`cs_card cs_style_2 cs_hover_tab anim_div_ShowDowns ${activeTab === i ? 'active' : ''}`} ref={currentRef}>
                <div className="cs_card_left">
                  <div className="cs_card_logo">
                    <Icon Svg={item.ward_img} className={cls.Award} />
                  </div>
                  <div>
                    <h2 className="cs_card_title">{item.title}</h2>
                    <div className="cs_card_subtitle">
                      {item.des}
                    </div>
                  </div>
                </div>
                <div className="cs_card_right">
                  <h2 className="cs_card_brand">{item.brand}</h2>
                </div>
                <div className="cs_card_hover_img">
                  <AppImage src={item.img} alt="Thumb" />
                </div>
              </div>
              )
            }
            )}

          </div>
        </div>
      </section>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};
