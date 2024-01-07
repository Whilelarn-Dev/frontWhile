export function formatText(text: string | undefined, limit = false): JSX.Element {
  if (!text) return <div></div>;
  if(limit) text = text.substring(0, 200);
  const formattedText = text.replace(/\n/g, " <br/>").split(" ");

  const formated = formattedText.map((text, index) => {
    if (text.includes("https://") || text.includes("http://")) {
      return (
        <a
          key={index}
          href={text}
          style={{ color: "#0000EE", textDecoration: "underline" }}
          target="_blank"
        >
          {text}
        </a>
      );
    }
    if (text.includes("<br/>")) return <br key={index} />;
    return <span key={index}> {`\u202C ${text}\u202B`}</span>;
  });
  return <div>{formated}</div>;
}

export const isEnglish = (text: string) => /^[A-Za-z0-9]*$/.test(text);
