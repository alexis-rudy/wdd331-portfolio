const archiveButton = document.querySelector(".btn-secondary");
const cardGrid = document.querySelector(".card-grid");
const activeCards = cardGrid.querySelectorAll(".card:not(.archived)");
const archivedCards = cardGrid.querySelectorAll(".card.archived");
let showingArchivedCards = false;

cardGrid.style.viewTransitionName = "project-card-grid";

activeCards.forEach((card, index) => {
  card.style.viewTransitionName = `project-card-${index}`;
});
archivedCards.forEach((card, index) => {
  card.style.viewTransitionName = `project-card-${index}`;
});

archivedCards.forEach((card) => {
  card.hidden = true;
});
archiveButton.setAttribute("aria-pressed", "false");

archiveButton.addEventListener("click", () => {
  const showArchivedCards = !showingArchivedCards;
  const updateCards = () => {
    activeCards.forEach((card) => {
      card.hidden = showArchivedCards;
    });
    archivedCards.forEach((card) => {
      card.hidden = !showArchivedCards;
    });
    showingArchivedCards = showArchivedCards;
    archiveButton.textContent = showArchivedCards ? "View Projects" : "View Archive";
    archiveButton.setAttribute("aria-pressed", String(showArchivedCards));
  };

  if (
    typeof document.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    document.startViewTransition(updateCards);
  } else {
    updateCards();
  }
});
