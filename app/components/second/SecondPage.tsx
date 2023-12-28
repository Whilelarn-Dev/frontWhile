const features = [
  " Embeds ChatGPT inside Your Website: Your website will have a chat widget that is supported by ChatGPT, and the answers will be based on the information available on your website.",

  "Connects Any Data (Words, PDFs, TXT, etc.): Every business has information available on websites, but sometimes you need to create more ways to explain your services, like user guides or FAQs. All of these files can also be connected to ChatGPT giving the bot more ways to answer.",

  "Multi-Language Support, Including Arabic: As an Arab from the Middle East, I know how much Arabic is a beautiful language and hard for machines to understand. With our solution, and ChatGPT's capability, we fully support Arabic language reading and writing.",

  "Regular Updates: Every sustainable business grows, and with growth, you add more information to your website, such as a new product, course, event, etc. We can provide a way for you to update the bots knowledge with all the new information you have.",

  "Insightful Analytics: We can generate a report that contains all the questions been asked to our ChatGPT-based bot, and send you a report with the question, answer, and which user asked it. This will be a good way for your business to reflect.",

  "Suggested Questions: Users often dont know what they want. With our AI-suggested questions, we can steer the conversation in a way to tell the user what they need to find with ease.",

  "Access to API: Maybe you are a big enterprise with a rich website, and you want to access our service from multiple places, like a mobile app or a desktop app. We can provide access to our API and offer the service anytime, anywhere.",

  "Tech Support: Tech stuff can be overwhelming. We will guide you and help you install the service, answer your questions, and take care of you.",
];

export default function SecondPage() {
  return (
    <>
      <div>
        <div className="font-bold  xl:text-4xl lg:text-3xl md:text-2xl text-xl text-center xl:p-7 lg:p-5 p-3">
          Enter the New Era of AI: Empower Your Business with ChatGPTs Advanced
          Capabilities
        </div>
        <div className="xl:text-xl lg:text-lg md:text-base text-sm text-center xl:p-7 lg:p-5 p-3 text-gray-700">
          Unlock New Possibilities in Customer Service and Data Management with
          Our Gen-AI Technology!
        </div>
        <div className="flex flex-wrap justify-center gap-5 xl:p-4 lg:p-2 p-1 md:space-y-0 space-y-4">
          {features.map((ele, idx) => (
            <div
              key={idx}
              className="w-full bg-white shadow-lg rounded-lg md:w-1/2 lg:w-1/3 xl:w-1/4 pt-5 px-3 pb-2"
            >
              <div className="text-center text-white h-fit w-fit bg-whileRed px-3 py-1 mb-1 rounded-md shadow-md">
                {idx + 1}
              </div>

              <div className=" font-bold text-lg text-gray-700">
                {ele.split(":")[0] + ":"}
              </div>
              <div className=" text-sm text-gray-600">{ele.split(":")[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
