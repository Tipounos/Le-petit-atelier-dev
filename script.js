const openSidebarBtn = document.getElementById("open-sidebar")
const closeSidebarBtn = document.getElementById("close-sidebar")
const canCloseSidebarEls = document.querySelectorAll("#close-sidebar, nav.mobile-only li a")
sidebar = document.getElementById("sidebar")

openSidebarBtn.addEventListener("click", function(e) {
    sidebar.classList.add("showSidebar")
    closeSidebarBtn.style.display = "block"
})

closeSidebarBtn.addEventListener("click", function() {
    sidebar.classList.remove("showSidebar")
    closeSidebarBtn.style.display = "none"
})

canCloseSidebarEls.forEach(element => {
    element.addEventListener("click", function() {
        sidebar.classList.remove("showSidebar")
        closeSidebarBtn.style.display = "none"
    })
});