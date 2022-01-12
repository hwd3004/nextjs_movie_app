// [id].js
// nextjs에서 변수를 포함하는 다이나믹 url임을 의미

import { useRouter } from "next/router";
import Seo from "../../components/Seo";

const Detail = ({ params }) => {
  const router = useRouter();
  // console.log(router);
  console.log(params);

  // const [title, id] = router.query.params || [];
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
};

export default Detail;

export const getServerSideProps = (ctx) => {
  console.log(ctx.params.params);
  const params = ctx.params.params;
  return {
    props: { params },
  };
};
