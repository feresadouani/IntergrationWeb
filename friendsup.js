const users = document.querySelectorAll(".user");
const chatPopup = document.getElementById("chatPopup");
const chatTitle = document.getElementById("chatTitle");
const popupMessages = document.getElementById("popupMessages");
const popupForm = document.getElementById("popupForm");
const popupInput = document.getElementById("popupInput");
const closeChat = document.getElementById("closeChat");
const welcomeCard = document.getElementById("welcomeCard");

let currentUser = null;

/* Open chat popup when clicking a user */
users.forEach(user => {
  user.addEventListener("click", () => {
    currentUser = user.dataset.user;
    chatTitle.textContent = user.textContent.trim();
    popupMessages.innerHTML = `
      <div class="message other">
        You are now chatting with ${user.textContent.trim()}
      </div>
    `;
    chatPopup.classList.remove("hidden");
    welcomeCard.style.display = "none"; // hide welcome card
  });
});

/* Close chat popup */
closeChat.addEventListener("click", () => {
  chatPopup.classList.add("hidden");
  currentUser = null;
  welcomeCard.style.display = "block"; // show welcome card again
});

/* Send message */
popupForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!popupInput.value || !currentUser) return;

  const msg = document.createElement("div");
  msg.classList.add("message", "user");
  msg.textContent = popupInput.value;

  popupMessages.appendChild(msg);
  popupInput.value = "";
  popupMessages.scrollTop = popupMessages.scrollHeight;
});
