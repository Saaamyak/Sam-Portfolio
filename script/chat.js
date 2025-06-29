const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestionsBox");
const suggestionsList = document.getElementById("suggestionsList");
const loader = document.getElementById("loader");

const spotlightBox = document.querySelector(".spotlight-box");

const allSuggestions = [
  "Who is Samyak?",
  "Is Samyak a hacker?",
  "Does Samyak know Cortex XDR?",
  "What all tools does Samyak have knowledge of?",
  "How much experience does Samyak have in cybersecurity?",
  "Can Samyak hack my neighbour’s Wi-Fi?",
  "Is Samyak the future CISO?",
  "Samyak vs ChatGPT – Who wins?",
  "Is Samyak working for the Indian government?",
  "What certifications does Samyak hold?",
  "Can Samyak secure my startup?",
  "Is Samyak active on TryHackMe?",
  "What company does Samyak work for?",
  "Can Samyak stop phishing attacks?"
];

// Utility: get N unique random items
function getRandomSuggestions(n = 3) {
  const shuffled = allSuggestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

// Debounce function
function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Show loader + suggestions
const showSuggestions = () => {
    loader.classList.remove("hidden");
  suggestionsList.classList.add("hidden");
  suggestionsBox.classList.remove("hidden");
  spotlightBox.classList.add("expanded");

    const newSuggestions = getRandomSuggestions();
    const suggestion_list_item = document.querySelector(".suggestion_list_items");
    suggestion_list_item.innerHTML = newSuggestions.map(text => `<li>${text}</li>`).join("");

    loader.classList.add("hidden");
    suggestionsList.classList.remove("hidden");

    // Reattach click event after replacing items
    document.querySelectorAll("#suggestionsList li").forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the click from bubbling up
        searchInput.value = item.textContent;
        searchInput.focus();
        clearIcon.classList.toggle("hidden", searchInput.value === "");
        show_ai_response();
      });
    });


};

const show_ai_response = async () => {
    const question = document.getElementById("searchInput").value;
    loader.classList.remove("hidden");
    suggestionsList.classList.add("hidden");
    const response = await fetch("https://secreat-project.vercel.app/ask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
    })
    const data = await response.json();
    loader.classList.add("hidden");
    // suggestionsList.classList.remove("hidden");
    const suggestion_list_item = document.querySelector(".suggestion_list_items");
    suggestion_list_item.classList.add("hidden");
    suggestionsList.classList.remove("hidden");
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = marked.parse(data.answer);
    resultDiv.classList.remove("hidden");
}
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter"   ) {
        document.querySelector(".spotlight-box").classList.add("expanded");
        show_ai_response();
    }
    const resultDiv = document.getElementById("result");
    if (e.target && e.target.value.trim() === "" && resultDiv.textContent.trim() !== "") {
        
        const suggestion_list_item = document.querySelector(".suggestion_list_items");
        suggestion_list_item.classList.remove("hidden");
        resultDiv.textContent = "";
        resultDiv.classList.add("hidden");
    }
});

searchInput.addEventListener("focus", () => {
    showSuggestions();
    document.querySelector(".spotlight-box").classList.add("expanded");
});


document.addEventListener("click", (e) => {
    if (!document.querySelector(".spotlight-container").contains(e.target)) {
        console.log(e.target)
        console.log(document.querySelector(".spotlight-container"))
        suggestionsBox.classList.add("hidden");
        document.querySelector(".spotlight-box").classList.remove("expanded");
    }
});

const clearIcon = document.getElementById("clearIcon");

searchInput.addEventListener("input", () => {
  clearIcon.classList.toggle("hidden", searchInput.value === "");
});

clearIcon.addEventListener("click", () => {
  searchInput.value = "";
  clearIcon.classList.add("hidden");
  searchInput.focus();
  const resultDiv = document.getElementById("result");
  const suggestion_list_item = document.querySelector(".suggestion_list_items");
        suggestion_list_item.classList.remove("hidden");
        resultDiv.textContent = "";
        resultDiv.classList.add("hidden");
});
