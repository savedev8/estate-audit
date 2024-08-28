import { AboutHomeFour } from '@/components/about/AboutHomeFour';
import { BlogDetails } from '@/components/details/BlogDetails';

export interface LinkType {
  title: string;
  text: string;
  link: string;
}

const next_data: LinkType = {
    title: "На этом процесс завершен. Поздравляем вас!",
    text: "Обратитесь к наиболее частым вопросам и ситуациям по сделкам",
    // поменять
    link: `/faq`,
}

export const BlogDetailsPage = () => {
  return (
      <>
        <BlogDetails />
        <AboutHomeFour next_data={next_data} />
      </>
  );
};
