import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children, title, description, keywords }) {
  return (
    <div className="relative bg-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div className="relative pt-6">
        <div className="pb-3">
          <Header />
        </div>
        <main className="max-w-7xl mx-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Cloud Computing Certification Training Courses | ExamPro',
  description:
    'Cloud Obsessed Certification Training. The fast and easy way to study. Choose Your Path. Which Cloud Certification is right for you?',
  keywords:
    'cloud, computing, certification, training, courses, exam, aws, azure, google, oracle, terraform',
};
