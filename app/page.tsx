import FirstPage from "./components/first/FirstPage";
import SecondPage from "./components/second/SecondPage";
import ThirdPage from "./components/third/Third";
export default function Home(): JSX.Element {
  return (
    <div className="overflow-x-hidden bg-whileWhite ">
      <main className="bg-[#fff5d7] h-min-screen w-screen">
        <FirstPage />
      </main>
      <main className="bg-[#fff5d7] w-screen">
        <SecondPage></SecondPage>
      </main>
      <main className="bg-[#fff5d7] w-screen">
        <ThirdPage />
      </main>
    </div>
  );
}
