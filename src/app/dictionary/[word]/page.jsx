import Result from "@components/main/result/Result";

const WordPage = async ({ params }) => {
  const word = params.word;

  return <Result word={word} />;
};

export default WordPage;
