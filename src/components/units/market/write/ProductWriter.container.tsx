import { useMutation } from "@apollo/client";
import ProductWriteUI from "./ProductWriter.presenter";
import { CREATE_USEDITEM } from "./ProductWriter.queries";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function ProductWrite(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  async function onClickSubmit(data) {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
        },
      },
    });
    console.log(data);
    alert("ok");
    router.push(`/markets/${result.data.createUseditem._id}`);
  }
  function onChangeMyEditor(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    console.log(value);
    trigger("contents");
  }
  return (
    <ProductWriteUI
      isEdit={props.isEdit}
      handleSubmit={handleSubmit}
      register={register}
      onClickSubmit={onClickSubmit}
      onChangeMyEditor={onChangeMyEditor}
    />
  );
}
