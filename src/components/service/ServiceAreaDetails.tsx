interface DataType {
  id: string;
  title: string;
  description: string;
}
const service_data: DataType[] = [
  {
    id: '№1',
    title: "Потребности и бюджет",
    description: `
    Четко сформулируйте, сколько комнат и какой район вам нужен, а также сколько денег вы готовы потратить.`,
  },
  {
    id: '№2',
    title: "Анализ объявлений",
    description: `Приступайте к поиску на нескольких сайтах-агрегаторах, потому что разные источники могут предложить уникальные варианты.`,
  },
  {
    id: '№3',
    title: "Уточнение деталей",
    description: `Узнайте о наличии правоустанавливающих документов на квартиру и отсутствии обременений, чтобы избежать неожиданных ситуаций.`,
  },
  {
    id: '№4',
    title: "Просмотры объектов",
    description: `На просмотрах оцените состояние дома, подъезда и квартиры, а также техническое состояние помещения и возможные изменения в планировке.`,
  },
]


const ServiceAreaDetails = () => {
  return (
    <>
      <div className="cs_height_70 cs_height_lg_30"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Необходимы 4 важных шага
            </h4>
            {/* <p className="cs_mp0 anim_text">
              Welcome to our digital agency! We specialize in helping businesses like yours succeed online.
              From website design and development to digital marketing and advertising, we have the tools and
              expertise to elevate your online presence.
            </p> */}
          </div>
          {/* <div className="cs_height_80 cs_height_lg_40"></div> */}
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {service_data.map((item, i) => (
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>

                    <h6 className="cs_work_title">{item.title}</h6>
                    <p className="cs_work_subtitle">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaDetails;