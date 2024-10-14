const wallpapers = document.querySelectorAll(".wallpaper");
const headings = document.querySelectorAll(".heading");
const background = document.querySelector("#background");
const app = document.querySelector("#app");

async function wait(miliseconds) {
  return await new Promise(resolve => setTimeout(resolve, miliseconds));
}

async function updateTheme(image, title, color) {
  try {
    await ui("theme", color || "#f9bd49");
  } catch (e) {}
  for(let wallpaper of wallpapers) wallpaper.src = image || "https://www.beercss.com/classic-utility-jacket.jpg";
  
  await reloadWallpaper();
}

async function updateMode() {
  const mode = ui("mode") == "dark" ? "light" : "dark";
  ui("mode", mode);
}

async function reloadWallpaper() {
  background.style.display = "none";
  await wait(100);
  background.style.display = "block";
}

async function reloadAnimation() {
  app.style.display = "none";
  await wait(100);
  app.style.display = "block";
}

window.addEventListener("load", () => {
  updateTheme("", "");
});

window.addEventListener("resize", () => {
  ui();
});
