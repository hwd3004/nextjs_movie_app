// react로 작업한다면 react helmet이 필요하지만, nextjs는 Head를 기본 제공
import Head from "next/head";

// prop들을 넣어서 head(SEO) 컴포넌트를 개인화할 수 있다

// https://developers.google.com/search/docs/advanced/crawling/special-tags?hl=ko
// 구글에서 인식하는 메타 태그

const Seo = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
      <meta name="Description" content={title}></meta>
    </Head>
  );
};

export default Seo;
