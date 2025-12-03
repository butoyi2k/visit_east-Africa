  // Données simulées
const country = {
  name: "Kenya",
  description: "Découvrez les vastes savanes, les lions majestueux et les cultures ancestrales du Kenya.",
  imageUrl: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81",
  highlights: ["Safaris", "Beaux paysages", "Culture Massaï", "Plages"]
};

const activities = [
  { title: "Safari & Nature", description: "Explorez la faune sauvage dans son habitat naturel" },
  { title: "Culture & Traditions", description: "Rencontrez les communautés locales et découvrez leur culture" },
  { title: "Gastronomie", description: "Savourez les saveurs authentiques de la cuisine locale" },
  { title: "Hébergement", description: "Lodges de luxe et camps de safari confortables" }
];

const travelInfo = [
  { label: "Meilleure période", value: "Juin - Octobre" },
  { label: "Visa", value: "Disponible à l'arrivée" },
  { label: "Langue", value: "Anglais, Swahili" },
  { label: "Monnaie", value: "Shilling kényan" }
];

// --- Injecter le contenu dans le HTML ---

document.getElementById("country-name").textContent = country.name;
document.getElementById("country-name-2").textContent = country.name;
document.getElementById("country-name-3").textContent = country.name;
document.getElementById("country-description").textContent = country.description;

document.getElementById("country-image").src = country.imageUrl;

const highlightsEl = document.getElementById("highlights");
country.highlights.forEach(h => {
  const span = document.createElement("span");
  span.textContent = h;
  highlightsEl.appendChild(span);
});

const activitiesEl = document.getElementById("activities");
activities.forEach(a => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <div class="card-icon">📷</div>
    <h4>${a.title}</h4>
    <p>${a.description}</p>
  `;
  activitiesEl.appendChild(div);
});

const travelInfoEl = document.getElementById("travel-info");
travelInfo.forEach(info => {
  const item = document.createElement("div");
  item.className = "info-item";
  item.innerHTML = `
    <p>${info.label}</p>
    <p><strong>${info.value}</strong></p>
  `;
  travelInfoEl.appendChild(item);
});

// Bouton retour
function goBack() {
  alert("Retour !");
}
