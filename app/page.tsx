import Chat from "./components/chat/Chat";
import FirstPage from "./components/first/FirstPage";
import FirstHeaders from "./components/headers/FirstHeaders";
import SecondPage from "./components/second/SecondPage";
import Third from "./components/third/Third";
export default function Home(): JSX.Element {
  return (
    <div className="overflow-x-hidden ">
      <FirstHeaders></FirstHeaders>
      <main id="Home" className="h-min-screen w-screen">
        <FirstPage />
        <Chat></Chat>
      </main>
      <main id="Features" className=" w-screen">
        <SecondPage></SecondPage>
      </main>
      <main id="Case Studies" className=" w-screen">
        <Third></Third>
      </main>
    </div>
  );
}
