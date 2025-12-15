const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");
const history = document.querySelector(".chat-history");

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = messageInput.value.trim();
  if (!text) return;

  // Add user message
  const msg = document.createElement("div");
  msg.classList.add("message", "user");
  msg.textContent = text;
  messages.appendChild(msg);

  messageInput.value = "";
  messages.scrollTop = messages.scrollHeight;
});

/* STATIC CONVERSATION HISTORY */
document.querySelectorAll(".conversation").forEach(conv => {
  conv.addEventListener("click", () => {
    document.querySelectorAll(".conversation").forEach(c =>
      c.classList.remove("active")
    );
    conv.classList.add("active");

    // Reset messages (static behavior)
    messages.innerHTML = `
      <div class="message expert">
        Hello this is slimen labyeth how can i hep you today?
      </div>
    `;
  });
});
