import blog_img_1 from "@/shared/assets/img/post_1.jpg";
import blog_img_2 from "@/shared/assets/img/post_2.jpg";
import blog_img_3 from "@/shared/assets/img/post_3.jpg";
import blog_img_4 from "@/shared/assets/img/post_4.jpg";
import blog_img_5 from "@/shared/assets/img/post_5.jpg";
import blog_img_6 from "@/shared/assets/img/post_6.jpg";
import blog_img_7 from "@/shared/assets/img/post_7.jpg";
import blog_img_8 from "@/shared/assets/img/post_8.jpg";
import blog_img_9 from "@/shared/assets/img/post_9.jpg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppImage } from "@/shared/ui/AppImage";
import { Modal } from "@/shared/ui/Modal";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const blog_data = [
  {
    id: 1,
    img: blog_img_1,
    title: `История объекта, включая все переходы права собственности`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка объекта',
  },
  {
    id: 2,
    img: blog_img_2,
    title: `Наличие обременений, арестов, ограничений на объект недвижимости (rosreestr.ru)`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка объекта',
  },
  {
    id: 3,
    img: blog_img_3,
    title: `Правоустанавливающие документы на объект, выполнение условий его передачи, завершение взаиморасчетов`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка объекта',
  },
  {
    id: 4,
    img: blog_img_4,
    title: `Наличие сведений о плановом капремонте объекта недвижимости, участие в программе реновации `,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка объекта',
  },
  {
    id: 5,
    img: blog_img_5,
    title: `Наличие сведений о признании объекта недвижимости аварийным `,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка объекта',
  },
  {
    id: 6,
    img: blog_img_6,
    title: `Наличие третьих лиц, имеющих право пользования объектом`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка объекта',
  },
  {
    id: 7,
    img: blog_img_7,
    title: `Наличие несогласованных перепланировок`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка объекта',
  },
  {
    id: 8,
    img: blog_img_8,
    title: `Наличие задолженностей по платежам за капитальный ремонт`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка объекта',
  },
  {
    id: 9,
    img: blog_img_9,
    title: `Права и полномочия лиц на совершение сделок`,
    des: `действительность паспорта, участие всех собственников, проверка полномочий при продаже по доверенности, если продавец – юрлицо, то нужна справка о том, что сделка не является крупной и сделкой с заинтересованностью, либо протокол собрания участников/акционеров, полномочия генерального директора на подписание договора купли-продажи, полномочия, предоставленные представителю по доверенности.`,
    category: 'Проверка покупателя',
  },
  {
    id: 10,
    img: blog_img_1,
    title: `Соблюдение требований законодательства в части защиты прав и законных интересов несовершеннолетних лиц`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка покупателя',
  },
  {
    id: 11,
    img: blog_img_2,
    title: `Соблюдение прав и законных интересов третьих лиц, не являющихся сторонами по сделкам`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка покупателя',
  },
  {
    id: 12,
    img: blog_img_3,
    title: `Наличие сведений о банкротстве правообладателя (bankrot.fedresurs.ru)`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка покупателя',
  },
  {
    id: 13,
    img: blog_img_4,
    title: `Наличие судебных дел (kad.arbitr.ru)`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка покупателя',
  },
  {
    id: 14,
    img: blog_img_5,
    title: `Наличие исполнительных производств`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    category: 'Проверка покупателя',
  },
]

interface CategoryType {
  id: number;
  category: string;
}

const category_data: CategoryType[] = [
  {
    id: 1,
    category: 'Проверка объекта',
  },
  {
    id: 2,
    category: 'Проверка продавца',
  },
]

const categories = [...new Set(blog_data.map((item) => item.category))];


interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
      className={classNames('', {}, [className || ''])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
  >
      <div onClick={onClose}>oParseError (/home/natasha/Desktop/Мой полноценный проект/Estate Audit/node_modules/@babel/parser/src/parse-error.ts:78:45)
    at TypeScriptParserMixin.raise (/home/natasha/Desktop/Мой полноценный проект/Estate Audit/node_modules/@babel/parser/src/tokenizer/index.ts:1496:19)
    at TypeScriptParserMixin.jsxParseElementAt (/home/natasha/Desktop/Мой полноценный проект/Estate Audit/node_modules/@babel/parser/src/plugins/jsx/index.ts:520:18)
</div>
  </Modal>
);


export const BlogArea = () => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Проверка объекта');
  const [items, setItems] = useState(blog_data);

  // ФИЛЬТРАЦИЯ ЭЛЕМЕНТОВ
  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    const findItems = blog_data.filter((findItem) => {
      return findItem.category == cateItem;
    })
    setItems(findItems);
  };

  // ЛОГИКА МОДАЛКИ
    const onCloseModal = useCallback(() => {
      setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
      setIsAuthModal(true);
  }, []);

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
      <section>
        <div>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_heading_title">
                  Проверка квартиры и  <br /> продавца
                </h2>
                <div className="cs_height_100 cs_height_lg_60"></div>
                <p>Запрашиваем у продавца полный пакет документов на недвижимость: правоустанавливающие документы (договор купли-продажи или договор долевого участия, приватизации, дарения и др.), выписку из ЕГРН, cогласие органов опеки, если в квартире проживают несовершеннолетние и т д. Ниже приведены необходимые для сделки документы:</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>

      <section>
        <div className="container">
        <div className="row">
              <div className="cs_isotop_item_menu col-md-12">
                <ul className="anim_div_ShowZoom style_active">
                  {categories.map((cate, i) => (
                    <React.Fragment key={i}>
                      <li
                        onClick={() => filterItems(cate)}
                        className={`${cate === activeCategory ? "active" : ""}`}
                      >
                        {cate}
                      </li>  {' '}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          <div className="row">
            {items?.map((item, i) => (
              <div key={i} className={`col-md-4 ${item.id === 2 ? 'mt-0 mt-md-5' : ''} ${item.id === 5 ? 'mt-0 mt-md-5' : ''} ${item.id === 8 ? 'mt-0 mt-md-5' : ''}`}>
                <div className="anim_div_ShowDowns">
                  <Link to="" className="cs_blog cs_style_1" onClick={onShowModal}>
                    <div>
                      <AppImage src={item.img} alt="post_1" />
                    </div>
                    <div className="cs_blog_info">
                      <h6 className="cs_blog_title">
                        {item.title}
                      </h6>
                      <p className="cs_blog_subtitle">
                        {item.des}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
