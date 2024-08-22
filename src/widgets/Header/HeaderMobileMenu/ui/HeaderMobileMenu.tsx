import { Link } from "react-router-dom";

interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[]
}


const menu_data: DataType[] = [
  {
    id: 1,
    title: "Главная",
    link: "/",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Главная",
        link: "/",
      },
      {
        id: 2,
        title: "Startup Agency",
        link: "/startup-agency",
      },
      {
        id: 3,
        title: "Design Studio",
        link: "/design-studio",
      },
      {
        id: 4,
        title: "Creative Portfolio",
        link: "/creative-portfolio",
      },
      {
        id: 5,
        title: "Marketing Agency",
        link: "/marketing-agency",
      },
      {
        id: 6,
        title: "About",
        link: '/about',
      },
      {
        id: 7,
        title: "Services",
        link: "/service",
      },
      {
        id: 8,
        title: "Services Details",
        link: "/service-details",
      },
      {
        id: 9,
        title: "Листинг с табами",
        link: "/portfolio",
      },
      {
        id: 10,
        title: "Portfolio Details",
        link: "/portfolio-details",
      },
      {
        id: 11,
        title: "Листинг",
        link: "/blog",
      },
      {
        id: 12,
        title: "Blog Details",
        link: "/blog-details",
      },
      {
        id: 13,
        title: "Contact",
        link: "/contact",
      },
      {
        id: 14,
        title: "Листинг",
        link: "/team",
      },
      {
        id: 15,
        title: "Team Details",
        link: "/team-details",
      },
      {
        id: 16,
        title: "Faq",
        link: "/faq",
      },
      {
        id: 17,
        title: "Error",
        link: "/error",
      }
    ]
  },
  {
    id: 2,
    title: "Этапы покупки",
    link: "/",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Выбор квартиры",
        link: "/service-details",
      },
      {
        id: 2,
        title: "Условия сделки",
        link: "/creative-portfolio",
      },
      {
        id: 3,
        title: "Внесение аванса",
        link: "/team-details",
      },
      {
        id: 4,
        title: "Проверка квартиры",
        link: "/contact",
      },
      {
        id: 5,
        title: "Подписание договора",
        link: "/faq",
      },
      {
        id: 6,
        title: "Регистрация сделки",
        link: "/error",
      },
      {
        id: 7,
        title: "Расчёт за квартиру",
        link: "/error",
      },
      {
        id: 8,
        title: "Приёмка квартиры",
        link: "/error",
      }    
    ]
  },
  {
    id: 3,
    title: "Частые вопросы",
    link: "/faq",
    has_dropdown: false,
  }
]


export const HeaderMobileMenu = ({ active, navTitle, openMobileMenu }: any) => {

  return (
    <>
      <ul className="cs_nav_list" style={{ display: active ? "block" : "none" }}>
        {menu_data.map((menu) => (
          <li key={menu.id} className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${navTitle === menu.title ? "active" : ""}`}>
            <Link to={menu.link}>{menu.title}</Link>
            {menu.has_dropdown && (
              <>
                <ul className="cs_mega_wrapper" style={{ display: navTitle === menu.title ? "block" : "none", }}>
                  {menu.sub_menu?.map((subMenu) => (
                    <li key={subMenu.id}>
                      <Link to={subMenu.link}>{subMenu.title}</Link>
                    </li>
                  ))}
                </ul>
                <span onClick={() => openMobileMenu(menu.title)} className={`cs_munu_dropdown_toggle ${navTitle === menu.title ? "active" : ""}`}></span>
              </>
            )}
          </li>
        ))}
      </ul>


    </>
  );
};
