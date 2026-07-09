const heroButton = document.getElementById("heroButton");
if (heroButton) {
  heroButton.addEventListener("click", () => {
    const message = document.createElement("p");
    message.textContent = "Thanks for checking out this filler page! You can replace this with your own content anytime.";
    message.style.marginTop = "1rem";
    message.style.color = "#2563eb";
    heroButton.insertAdjacentElement("afterend", message);
    heroButton.disabled = true;
  });
}
