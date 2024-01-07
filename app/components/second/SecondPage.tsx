const features = [
  " Embeds ChatGPT inside Your Website : Chat widget supported by ChatGPT for website interaction.Answers based on the information available on the website.",
  " Connects Any Data (Words, PDFs, TXT, etc.) : Enables connection of additional files like user guides or FAQs.Expands the bot's knowledge for comprehensive responses.",
  "Multi-Language Support, Including Arabic : Fully supports reading and writing in the Arabic language.Addresses the challenge of understanding Arabic for machines",
  " Regular Updates:Provides a mechanism for updating the bot's knowledge.Accommodates growth and addition of new information to the website.",
  "Insightful Analytics : Generates a detailed report on user queries.Offers insights into questions, answers, and user interactions.",
  "Suggested Questions : Utilizes AI-suggested questions to guide user conversations.Facilitates user discovery of relevant information with ease.",
  " Access to API : Offers API access for enterprises with diverse service needs.Ensures the availability of the service across multiple platforms.",
  "Tech Support:Assists with installation and addresses technical queries.Ensures a smooth experience for users integrating the service.",
];

export default function SecondPage() {
  return (
    <>
      <div>
        <div className="font-bold  xl:text-4xl lg:text-3xl md:text-2xl text-xl text-center xl:p-7 lg:p-5 p-3">
          Enter the New Era of AI: Empower Your Business with ChatGPT&apos;s
          Advanced Capabilities
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
              <div className="text-center text-white h-fit w-fit bg-whileRed px-3 py-1 mb-2 rounded-md shadow-md">
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
