import AboutHomeFour from '@/components/about/AboutHomeFour';
import BlogDetails from '@/components/details/BlogDetails';

export const metadata = {
  title: "Blog Details Estate Audit",
};

export const BlogDetailsPage = () => {
  return (
      <>
        <BlogDetails />
        <AboutHomeFour />
      </>
  );
};
