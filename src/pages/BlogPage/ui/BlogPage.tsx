import { AboutHomeFour } from '@/components/about/AboutHomeFour';
import { BlogArea } from '@/components/blog/BlogArea';

export interface CheckItemType {
  title: string;
  text: string;
  link: string;
}

const next_data: CheckItemType = {
    title: "Все необходимые документы проверены?",
    text: "Перейдём к этапу №5",
    // поменять
    link: '/team-details', 
}


export const BlogPage = () => {
  return (
      <>
        <BlogArea />
        <AboutHomeFour next_data={next_data} />
      </>
  );
};