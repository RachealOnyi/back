window.onload = () => {
    window.addEventListener("beforeunload", function (e) {
        window.history.pushState({page: 1}, "", "");
    });
    window.onpopstate = function(event) {
    
        // "event" object seems to contain value only when the back button is clicked
        // and if the pop state event fires due to clicks on a button
        // or a link it comes up as "undefined" 
    
        if(event){
            console.log(event)
            // Code to handle back button or prevent from navigation
            location.assign('https://example.com') 
        }
        else{
            // Continue user action through link or button
        }   
        }
 
}