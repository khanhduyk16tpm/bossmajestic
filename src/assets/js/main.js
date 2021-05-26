var sidebarToggle = new NoCallbackToggle("#menu-btn",{
    onOn: function(n) {
      var sidebar = document.querySelector("#sidebar");
      var container = document.querySelector(".my-container");
      var sidebarbtnon = document.querySelector(".btn-sidebar-on");
      sidebar.classList.add("active-nav");
      container.classList.add("active-cont");
      sidebarbtnon.classList.remove("d-none");
      n.classList.add("d-none");
      const nClass = n.classList;
      if (nClass.contains("toggle-on")){
        n.classList.remove("toggle-on");
        n.classList.add("toggle-off");
      }
    },
    onOff: function(n) {
      var sidebar = document.querySelector("#sidebar");
      var container = document.querySelector(".my-container");
      var sidebarbtnoff = document.querySelector(".btn-sidebar-off");
      sidebar.classList.remove("active-nav");
      container.classList.remove("active-cont");
      n.classList.add("d-none");
      const nClass = n.classList;
      if (nClass.contains("toggle-off")){
        n.classList.remove("toggle-off");
        n.classList.add("toggle-on");
      }
      sidebarbtnoff.classList.remove("d-none");
    },
    success: function() {
        return !0
    }
});
function triggerSidebarByScreen(x) {
  if (x.matches) {
    document.querySelector(".btn-sidebar-on").click();
  }else{
    document.querySelector(".btn-sidebar-off").click();
  }
}
function init() {
  var x = window.matchMedia("(max-width: 576px)")
  triggerSidebarByScreen(x) 
  x.addListener(triggerSidebarByScreen)
}
init()