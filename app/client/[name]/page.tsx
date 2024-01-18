import ClientHolder from "./ClientHolder";

// "use client";
interface pageParams {
  params: {
    name: string;
  };
}
export default function page({ params }: pageParams) {
  

  return (
   <ClientHolder name={params.name}></ClientHolder>
  );
}
