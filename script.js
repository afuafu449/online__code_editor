const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const preview = document.getElementById("preview");
const themeToggle = document.getElementById("theme-toggle");

let timeoutId;

function updatePreview() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    const code = `
      <html>
        <head><style>${css.value}</style></head>
        <body>
          ${html.value}
          <script>${js.value}<\/script>
        </body>
      </html>
    `;
    preview.srcdoc = code;
  }, 300);
}

[html, css, js].forEach((el) => el.addEventListener("input", updatePreview));

html.value = "<h1>Hello, Afna!</h1>";
css.value = "body { color: #4CAF50; text-align: center; font-size: 2rem; }";
js.value = "console.log('Editor ready!');";
updatePreview();

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkMode = document.body.classList.contains("dark");
  themeToggle.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});
