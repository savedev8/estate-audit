import image from "@/shared/assets/img/modern_digital_need.jpg";
import { AppImage } from "@/shared/ui/AppImage";


interface DataType {
	title_1: string;
	des_1: string;
	title_2: string;
	des_2: string;
	features: {
		id: number;
		title: string;
		des: string;
	}[];
}

const innovative_data: DataType = {
	title_1: `Регистрируем сделку`,
	des_1: `Регистрация проходит от 7 до 14 дней (в зависимости от региона). После регистрации права собственности вы получите выписку из ЕГРН. Штампы на договоры купли-продажи Росреестр больше не ставит. Ниже приведены способы подачи на регистрацию права собственности:`,
	title_2: `В интернете.`,
	des_2: ` Подать документы на регистрацию можно через портал госуслуг. Еще подачу документов на регистрацию права собственности онлайн применяют некоторые банки по договорам купли-продажи квартир своих клиентов. Но договор купли-продажи должен быть подписан квалифицированной электронной подписью всех участников сделки`,
	features: [
		{
			id: 1,
			title: `Нотариус`,
			des: `Нотариусы сами отправляют в Росреестр документы на регистрацию договоров купли-продажи, которые они удостоверяют. Это бесплатно. Заплатить придется только за удостоверение договора.`,
		},
		{
			id: 2,
			title: `Почтовое отправление`,
			des: `Отправить документы на государственную регистрацию права собственности можно по почте с описью вложения и уведомлением о вручении в офис Росреестра по месту нахождения квартиры.`,
		},
		{
			id: 3,
			title: `МФЦ`,
			des: `Для физических лиц это самый простой и недорогой способ. Стоимость и условия в каждом регионе свои, их можно узнать в конкретном МФЦ.`,
		},
	],
};

const { title_1, des_1, title_2, des_2, features } = innovative_data;

export const InnovativeHomeTwo = () => {
	return (
		<>
			<div className="cs_height_150 cs_height_lg_60"></div>
			<section>
				<div className="container">
					<div className="cs_modern_needs cs_style">
						<div className="cs_col_md_778">
							<div className="cs_text">
								<div className="cs_section_heading cs_style_1">
									<div className="cs_section_heading_text">
										<h2 className="cs_section_title anim_heading_title">
											{title_1}
										</h2>
									</div>
								</div>
								<div className="cs_height_65"></div>
								<p className="anim_text">{des_1}</p>
							</div>
							<div className="cs_height_85"></div>
							<div className="row anim_div_ShowLeftSide">
								{features.map((item, i) => (
									<div className="col-md-4 col-12" key={i}>
										<div className="cs_stroke_text">
											<span>{item.id}</span>
										</div>
										<div className="text-section">
											<h6>{item.title}</h6>
											<p>{item.des}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="cs_col_md_672">
							<div className="cs_img_section">
								<AppImage src={image} alt="modern_digital_need" />
								<div className="cs_img_card_text anim_div_ShowZoom">
									<h6 className="cs_color_style">{title_2}</h6>
									<p>{des_2}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
