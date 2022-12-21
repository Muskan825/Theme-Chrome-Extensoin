chrome.runtime.onMessage.addListener((req)=>{
    changeColor(req);
})
function changeColor(req){
    document.body.style.backgroundColor = req;
}