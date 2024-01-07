const features = [
  " Can I provide training data without web pages or files : Yes, input raw text content for training.",
  " Can I upload syllabus or user guides to the bot : Yes, based on your plan, file upload is allowed.",
  " Plans for agencies to provide chatbots to clients: Yes, for details, contact us via email.",
  " Is a demo available for me to try : Yes, experience the live demo at whilelearn.com/#Live%20Demo.",
  " What content is suitable for training the chatbot: Use any content; more content improves responses.",
  " Is the chatbot automatically retrained on website changes : Currently, manual retraining is needed; automation is in progress.",
  " Can I upload files to train the chatbot : Yes, upload CSV/TXT/PDF/DOCX/MD files based on plan limits.",
  " Files exceed 10 MB. What should I do : Contact us at m.imam@whilelearn.com for a solution.",
  " How to integrate the chatbot into my website : Each chatbot has a unique URL; use the provided code or link.",
  "How do I train the chatbot : Train by adding a website link, sitemap link, Zendesk Help Center Link, or Gitbook link. Upload CSV/TXT/PDF/DOCX/MD files.",
  " How long does the training process take : Training time varies based on the number of pages; typically, it's completed within a few minutes.",
  "How can I get in touch with you : Feel free to reach out to us at m.imam@whilelearn.com.",
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
