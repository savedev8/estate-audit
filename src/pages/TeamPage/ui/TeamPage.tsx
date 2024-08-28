import { AboutHomeFour } from '@/components/about/AboutHomeFour';
import { TeamArea } from '@/components/team/TeamArea';

export const metadata = {
  title: "Team Estate Audit",
};


export const TeamPage = () => {
  return (
      <>
        <TeamArea />
        <AboutHomeFour />
      </>
  );
};
