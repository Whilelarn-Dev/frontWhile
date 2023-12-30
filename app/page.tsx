import Chat from "./components/chat/Chat";
import FirstPage from "./components/first/FirstPage";
import Five from "./components/five/Five";
import Four from "./components/four/Four";
import FirstHeaders from "./components/headers/FirstHeaders";
import SecondPage from "./components/second/SecondPage";
import Third from "./components/third/Third";
import Pricing from './components/pricing/Pricing';
export default function Home(): JSX.Element {
  return (
    <div className="overflow-x-hidden ">
      <FirstHeaders></FirstHeaders>
      <main id="Home" className="h-min-screen w-screen">
        <FirstPage />
        <Chat></Chat>
      </main>
      <main id="Features" className=" h-full h-min-screen w-screen">
        <SecondPage></SecondPage>
      </main>
      <main id="Case Studies" className="h-full h-min-screen w-screen">
        <Third></Third>
      </main>
      <main id="Pricing" className="h-full h-min-screen w-screen">
        <Pricing></Pricing>
      </main>
      <main id="Live Demo" className="h-full h-min-screen w-screen">
        <Four></Four>
      </main>
      <main className="h-full h-min-screen w-screen">
        <Five></Five>
      </main>
    </div>
  );
}
