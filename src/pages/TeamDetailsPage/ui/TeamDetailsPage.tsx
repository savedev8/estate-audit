import { ServiceTeam } from '@/components/service/ServiceTeam';
import { AboutHomeFour } from '@/components/about/AboutHomeFour';
import { TeamDetailsArea } from '@/components/details/TeamDetailsArea';

export const metadata = {
  title: "Team Details Estate Audit ",
};

export const TeamDetailsPage = () => {
  return (
      <>
        <TeamDetailsArea />
        <ServiceTeam />
        <AboutHomeFour />
      </>
  );
};
