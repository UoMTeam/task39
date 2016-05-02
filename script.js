function doOnScroll() {
    var title = document.getElementById("title");
    var height = document.getElementById("forTable").offsetHeight;
    if (document.body.scrollTop > height) {
        title.style.display = "none";
    } else {
        title.style.display = "table-row";
    }
}


window.onload = function() {
    document.getElementById("test").style.width = "300px";
    document.getElementById("test").style.height = "1000px";
}
window.onscroll = function() {
    doOnScroll();
}