let expanded = false;

const menuItems = [
  ["User Profile", "fas fa-user"],
  ["Password & Security", "fas fa-lock"],
  ["Account & Payment", "fas fa-credit-card"],
  ["Initialise App", "fas fa-play-circle"],
  ["Open Editor", "fas fa-keyboard"],
  ["Access Terminal", "fas fa-terminal"],
  ["Find Nodes", "fab fa-connectdevelop"],
  ["Connection Options", "fas fa-wifi"],
  ["Peripheral Setup", "fas fa-plug"],
  ["Notifications", "fas fa-bell"],
  ["Settings", "fas fa-cog"],
  ["About SparkMenu", "fas fa-info-circle"],
];

function populateMenu(array, state) {
  const location = document.getElementById("menu-section");
  array.forEach((element) => {
    let newDiv = document.createElement("div");
    let icon = document.createElement("i");
    location.appendChild(newDiv);
    newDiv.appendChild(icon);
    newDiv.className = "menu-item";
    icon.className = element[1];
    if (state) {
      let label = document.createTextNode(element[0]);
      newDiv.appendChild(label);
    }
  });
}

function clearPanel() {
  document.getElementById("menu-section").innerHTML = "";
}

function addOrRemoveExpansion(bool) {
  let menuPanel = document.getElementById("panel");
  if (bool) {
    menuPanel.classList.add("expanded");
  } else {
    menuPanel.classList.remove("expanded");
  }
}

document.body.onload = populateMenu(menuItems, expanded);

document.body.addEventListener(
  "click",
  (evt) => {
    if (evt.target.id === "spark" && expanded === false) {
      clearPanel();
      addOrRemoveExpansion(true);
      setTimeout(populateMenu, 500, menuItems, true);
      expanded = true;
    } else if (evt.target.id === "hide") {
      clearPanel();
      populateMenu(menuItems, false);
      addOrRemoveExpansion(false);
      expanded = false;
    }
  },
  false
);
