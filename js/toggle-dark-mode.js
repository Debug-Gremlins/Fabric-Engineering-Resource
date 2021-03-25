const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});
