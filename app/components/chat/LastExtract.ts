
export const extract = (text: string): { source: string; title: string } => {
    if (!text) return { source: "", title: "" };
    const holder = text.split("000");
    const source =  holder[0];
    const title = holder[1];

    return { source, title };
}