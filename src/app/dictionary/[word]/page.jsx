import Result from "@components/main/result/Result";

const WordPage = async ({ params }) => {
  console.log("params", params);
  const word = params.word;
  console.log("word in effect is :", word);

  return <Result word={word} />;
};

export default WordPage;
