const quotes = [
    { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
    { text: "She remembered who she was and the game changed.", author: "Lalah Delia" },
    { text: "Your life is as good as your mindset.", author: "Unknown" },
    { text: "You are stronger than you think, braver than you believe, and smarter than you know.", author: "A.A. Milne" },
    { text: "Success is not about the destination, it’s about the journey.", author: "Zig Ziglar" },
    { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" }
];
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    const quoteBox = document.getElementById("quoteBox");
    const authorBox = document.getElementById("authorBox");

    quoteBox.classList.add("opacity-0");
    authorBox.classList.add("opacity-0");

    setTimeout(() => {
        quoteBox.innerText = `"${quote.text}"`;
        authorBox.innerText = `— ${quote.author}`;
        quoteBox.classList.remove("opacity-0");
        authorBox.classList.remove("opacity-0");
    }, 300);
}
