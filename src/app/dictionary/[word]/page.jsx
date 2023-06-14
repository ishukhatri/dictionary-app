import Header from "@components/header/Header";
import { ThemeProvider } from "@contexts/ThemeContext";
import Result from "@components/main/result/Result";

const WordPage = async ({ params }) => {
  console.log("params", params);
  const word = params.word;
  console.log("word in effect is :", word);

  return (
    <ThemeProvider>
      <div>
        <Header />
        <Result word={word} />
      </div>
    </ThemeProvider>
  );
};

export default WordPage;
