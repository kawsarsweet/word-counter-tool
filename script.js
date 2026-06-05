const textArea = document.getElementById("text");

textArea.addEventListener("input", () => {

    const text = textArea.value;

    const words = text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

    const chars = text.length;

    const paragraphs = text.trim()
        ? text.split(/\n+/).filter(p => p.trim() !== "").length
        : 0;

    const readingTime = Math.ceil(words / 200);

    document.getElementById("wordCount").innerText = words;
    document.getElementById("charCount").innerText = chars;
    document.getElementById("paragraphCount").innerText = paragraphs;
    document.getElementById("readingTime").innerText = readingTime;
});

function copyText(){
    navigator.clipboard.writeText(textArea.value);
    alert("Text Copied!");
}

function clearText(){
    textArea.value="";
    document.getElementById("wordCount").innerText=0;
    document.getElementById("charCount").innerText=0;
    document.getElementById("paragraphCount").innerText=0;
    document.getElementById("readingTime").innerText=0;
}