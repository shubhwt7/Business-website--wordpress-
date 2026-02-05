// Navigation demo
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => {
    alert(`✨ ${item.innerText} section coming soon!`);
  });
});

// CTA button
document.querySelector(".cta-button").addEventListener("click", () => {
  alert("🧘‍♀️ Thanks for your interest! Booking opens soon 🌱");
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("💚 Thank you! We’ll get back to you shortly.");
});
