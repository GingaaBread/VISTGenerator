const records = document.getElementById("records");
records.oninput = () => {
    if (records.value.length < 30)
        records.style.width = (3 + 3 * records.value.length) + "vw";
};


function parse() {
    const keywords = ["IS", "USES", "HAS", "BASE", "ARE", "PLUS", "AND", "BUT"];
    const textEnclosers = ["'", '"'];
    const colourInit = "#";
    // ON ADD:
    // document.getElementsByTagName('h2')[3].scrollIntoView();
}