  document.addEventListener("click", function(e) {
  if (!e.isTrusted) return; // ignore programmatic clicks
  const sound = document.getElementById("clickSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
  // GLOW OVERLAY
  const glow = document.createElement("div");
  glow.classList.add("click-glow");
  glow.style.left = `${e.pageX}px`;
  glow.style.top = `${e.pageY}px`;
  document.body.appendChild(glow);

  // SPARK
  const spark = document.createElement("span");
  spark.classList.add("click-spark");
  spark.style.left = `${e.pageX}px`;
  spark.style.top = `${e.pageY}px`;
  document.body.appendChild(spark);

  // Clean up after animation
  setTimeout(() => {
    glow.remove();
    spark.remove();
  }, 600);
});

 const typingSound = document.getElementById("typingSound");

  document.addEventListener("keydown", function (e) {
    const target = e.target;
    // Only play sound when typing inside input or textarea
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      if (typingSound) {
        typingSound.currentTime = 0;
        typingSound.play();
      }
    }
  });

  const allowedKeys = /^[a-zA-Z0-9]$/;
if (allowedKeys.test(e.key)) {
  typingSound.currentTime = 0;
  typingSound.play();
}

const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("pass-btn");

  togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";

    togglePassword.classList.toggle("fa-eye-slash", !isPassword);
    togglePassword.classList.toggle("fa-eye", isPassword);
  });

var a = 0;

function pass() {
  const passInput = document.getElementById("pass-btn");
  const icon = document.getElementById("togglePassword");

  if (a === 1) {
    passInput.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
    a = 0;
  } else {
    passInput.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    a = 1;
  }
}


