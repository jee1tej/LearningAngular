///hashchange
window.onhashchange = function() {
    
    if(window.location.hash === "#/bookmark/1")
        console.log("Page 1 is cool!!" + window.location.hash);
    if(window.location.hash === "#/bookmark/2")
        console.log("Page 3 is cool!!" + window.location.hash);
    if(window.location.hash === "#/bookmark/3")
        console.log("Page 4 is cool!!" + window.location.hash);
    
    
};