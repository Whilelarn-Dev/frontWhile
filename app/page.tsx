import ChatHolder from "./components/chat/ChatHolder";
import FirstPage from "./components/first/FirstPage";
import Five from "./components/five/Five";
import Four from "./components/four/Four";
import Question from "./components/qustion/Question";
import SecondPage from "./components/second/SecondPage";
import Third from "./components/third/Third";
export default function Home(): JSX.Element {
  return (
    <div className="overflow-x-hidden ">
      <main id="/" className="h-min-screen w-screen">
        <FirstPage />
        <ChatHolder></ChatHolder>
      </main>
      <main id="features" className=" h-full h-min-screen w-screen">
        <SecondPage></SecondPage>
      </main>
      <main id="install" className="h-full h-min-screen w-screen">
        <Third></Third>
      </main>
      <main id="Live Demo" className="h-full h-min-screen w-screen">
        <Four></Four>
      </main>
      <main className="h-full h-min-screen w-screen">
        <Five></Five>
      </main>
      <main className="h-full h-min-screen w-screen overflow-clip">
        <Question></Question>
      </main>
    </div>
  );
}
