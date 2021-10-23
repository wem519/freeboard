import ProductListUI from "./ProductList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USEDITEMS } from "./ProductList.queries";

export default function ProductList() {
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1 },
  });
  const router = useRouter();

  function onClickToWrite() {
    router.push("/markets/new");
  }

  return (
    <>
      <ProductListUI data={data} onClickToWrite={onClickToWrite} />
    </>
  );
}
