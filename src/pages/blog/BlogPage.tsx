import AboutHomeFour from '@/components/about/AboutHomeFour';
import BlogArea from '@/components/blog/BlogArea';

export const metadata = {
  title: "Blog Estate Audit",
};

export const BlogPage = () => {
  return (
      <>
        <BlogArea />
        <AboutHomeFour />
      </>
  );
};