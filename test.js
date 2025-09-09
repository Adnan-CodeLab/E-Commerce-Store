function handleClickEffect(e) {
  if (!e.isTrusted) return;

  const sound = document.getElementById("clickSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }

  const x = e.pageX || e.touches?.[0].pageX;
  const y = e.pageY || e.touches?.[0].pageY;

  // Glow
  const glow = document.createElement("div");
  glow.classList.add("click-glow");
  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;
  document.body.appendChild(glow);

  // Spark
  const spark = document.createElement("span");
  spark.classList.add("click-spark");
  spark.style.left = `${x}px`;
  spark.style.top = `${y}px`;
  document.body.appendChild(spark);

  setTimeout(() => {
    glow.remove();
    spark.remove();
  }, 600);
}

document.addEventListener("click", handleClickEffect);
document.addEventListener("touchstart", handleClickEffect);

// Typing Sound
const typingSound = document.getElementById("typingSound");

document.addEventListener("keydown", function (e) {
  const target = e.target;
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
    if (/^[a-zA-Z0-9]$/.test(e.key)) {
      typingSound.currentTime = 0;
      typingSound.play();
    }
  }
});

// Password toggle
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("pass-btn");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePassword.classList.toggle("fa-eye-slash", !isPassword);
  togglePassword.classList.toggle("fa-eye", isPassword);
});


