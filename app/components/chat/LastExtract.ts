
export const extract = (text: string): { source: string; title: string } => {
    if (!text) return { source: "", title: "" };
    const sourceStarIndex = text.indexOf(":");
    const sourceEndIndex = text.indexOf("|");
    const source = text.slice(sourceStarIndex + 1, sourceEndIndex);

    const titleStarIndex = text.indexOf("(");
    const titleEndIndex = text.indexOf(")");
    const title = text.slice(titleStarIndex +2, titleEndIndex-2);

    return { source, title };
}