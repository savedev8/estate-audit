// import { ServiceTeam } from '@/components/service/ServiceTeam';
import { AboutHomeFour } from '@/components/about/AboutHomeFour';
import { TeamDetailsArea } from '@/components/details/TeamDetailsArea';

export interface CheckItemType {
  title: string;
  text: string;
  link: string;
}

const next_data: CheckItemType = {
    title: "Договор купли-продажи подписан?",
    text: "Перейдём к этапу №6",
    // поменять
    link: '/startup-agency', 
}

export const TeamDetailsPage = () => {
  return (
      <>
        <TeamDetailsArea />
        {/* <ServiceTeam /> */}
        <AboutHomeFour next_data={next_data} />
      </>
  );
};
