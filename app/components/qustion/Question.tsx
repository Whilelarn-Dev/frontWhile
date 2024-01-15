import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const traning = [
  "Can I provide training data without web pages or files? : Yes, input raw text content for training.",
  "Can I upload syllabus or user guides to the bot? : Yes, based on your plan, file upload is allowed.",
  "Plans for agencies to provide chatbots to clients? : Yes, for details, contact us via email.",
  "Is a demo available for me to try? : Yes, experience the live demo at whilelearn.com/#Live%20Demo.",
  "What content is suitable for training the chatbot? : Use any content; more content improves responses.",
  "Is the chatbot automatically retrained on website changes? : Currently, manual retraining is needed; automation is in progress.",
  "Can I upload files to train the chatbot? : Yes, upload CSV/TXT/PDF/DOCX/MD files based on plan limits.",
  "Files exceed 10 MB. What should I do? : Contact us at Muwaffaq@whilelearn.com for a solution.",
  "How to integrate the chatbot into my website? : Each chatbot has a unique URL; use the provided code or link.",
  "How do I train the chatbot? : Train by adding a website link, sitemap link, Zendesk Help Center Link, or Gitbook link. Upload CSV/TXT/PDF/DOCX/MD files.",
  "How long does the training process take? : Training time varies based on the number of pages; typically, it's completed within a few minutes.",
  "How can I get in touch with you? : Feel free to reach out to us at Muwaffaq@whilelearn.com.",
];
const technology = [
  "Can you embed a chatbot on multiple websites? : Yes, add any chatbot to as many sites as you want.",
  "Do you have API for Whilelearn? : Yes, a comprehensive API is available; contact us for details.",
  "Do you use ChatGPT3 or ChatGPT4? : Choose GPT-4, GPT-3, or both APIs for customer support quality.",
  "How do I add the chatbot to my website? : Each chatbot gets a unique URL; embed it using the provided code.",
  "What counts as a 'message'? : Both user messages and bot-generated replies are counted separately.",
  "Can I access the chats and interactions users have with my chatbots? : Yes, you have complete access to all chat history and interactions in the dashboard.",
  "Is the chatbot customizable? : Yes, change color, icon, name, suggestions, and more; customization options available.",
  "Do you store the chatbot messages? : Yes, all questions asked by visitors and answers provided by the chatbot are stored. The chat history is accessible in the dashboard.",
  "Does it work on websites that are in Arabic languages? : Yes, Whilelearn can work on websites in any language, not just English. It also works for the Arabic language. The chatbot can also answer questions in different languages.",
  "Do you use Open AI models or your own custom model? : Whilelearn currently uses Open AI models for everything.",
  "My company needs a custom integration or feature not yet supported by Whilelearn. What should I do? : If you need a custom integration, you can join as an Enterprise customer, and they can figure out a custom pricing plan based on your needs. Contact them for further discussion.",
];
const pricing = [
  "Can I add a chatbot to multiple websites? : Yes, you can include a chatbot on as many sites as you want, allowing visitors to engage with it across various platforms.",
  "Does Whilelearn offer an API? : Certainly! Whilelearn provides a comprehensive API. For more details, reach out to us at Muwaffaq@whilelearn.com.",
  "Which ChatGPT version is used - GPT-3 or GPT-4? : You have the flexibility to choose between GPT-4, GPT-3, or both APIs to ensure the best quality for your customer support experience. Additionally, options like Google's Gemini or Text-bison are available.",
  "How do I integrate the chatbot into my website? : Each chatbot comes with its unique URL. You can easily embed it on your site using the provided code or link directly to the chatbot.",
  "What counts as a 'message'? : Both user messages and bot-generated replies are counted separately when calculating the number of messages.",
  "Can I access the chats and interactions users have with my chatbots? : Yes, you have complete access to all chat history and interactions in the dashboard, providing valuable insights into past and ongoing conversations.",
  "Is the chatbot customizable? : Certainly! You can personalize the chatbot's color, icon, name, suggestions, and more. We offer various customization options to suit your preferences.",
  "Are chatbot messages stored? : Yes, all questions asked by visitors and answers provided by the chatbot are stored. The chat history is accessible in the dashboard.",
  "Does Whilelearn support websites in Arabic and other languages? : Absolutely! Whilelearn is not limited to English; it works seamlessly with websites in any language, including Arabic. The chatbot is capable of answering questions in multiple languages.",
  "Does Whilelearn use Open AI models or a custom model? : Whilelearn currently uses Open AI models for all its functionalities.",
  "My company requires a custom integration not supported by Whilelearn. What should I do? : If you need a custom integration, consider joining as an Enterprise customer. Contact us to discuss your requirements, and we can create a custom pricing plan based on your needs.",
];

export default function Question() {
  return (
    <div className="flex  flex-col items-center mt-10 p-10 mb-20">
      <div className="text-5xl font-bold my-9">FQA</div>
      <Tabs defaultValue="training" className="w-full ">
        <div className="w-full flex justify-center gap-10 mb-5">
          <TabsList className="bg-white">
            <TabsTrigger
              className="focus:bg-whileRed focus:text-white"
              value="training"
            >
              Training and Functionality
            </TabsTrigger>
            <TabsTrigger
              className="focus:bg-whileRed focus:text-white"
              value="tecnology"
            >
              Technology and Integration
            </TabsTrigger>
            <TabsTrigger
              className="focus:bg-whileRed focus:text-white"
              value="pricing"
            >
              Pricing and Usage
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="training"
          className="grid grid-cols-1 md:grid-cols-2 px-14 gap-10"
        >
          {traning.map((item) => (
            <Accordion key={item} type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.split(":")[0]}</AccordionTrigger>
                <AccordionContent>{item.split(":")[1]}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </TabsContent>
        <TabsContent
          value="tecnology"
          className="grid grid-cols-1 md:grid-cols-2 px-14 gap-10"
        >
          {technology.map((item) => (
            <Accordion key={item} type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.split(":")[0]}</AccordionTrigger>
                <AccordionContent>{item.split(":")[1]}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </TabsContent>
        <TabsContent
          value="pricing"
          className="grid grid-cols-1 md:grid-cols-2 px-14 gap-10"
        >
          {pricing.map((item) => (
            <Accordion key={item} type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.split(":")[0]}</AccordionTrigger>
                <AccordionContent>{item.split(":")[1]}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
