const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "hsl(210, 80%, 50%)",   // vibrant blue
  "hsl(42, 85%, 58%)",    // bright gold
  "hsla(42, 85%, 58%, 0.3)", // transparent gold
  "hsl(195, 70%, 40%)",   // darker animated blue
  "hsl(50, 90%, 60%)",    // bright yellow
  "hsla(50, 90%, 60%, 0.2)" // transparent yellow
];

circles.forEach(function(circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
    coords.x = e.pageX;
    coords.y = e.pageY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function(circle, index){
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

// ✅ DO NOT ADD CLICK SOUND HERE


