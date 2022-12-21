document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("btn").addEventListener('click',onclick,false)
    function onclick(){
        let color = document.getElementById("theme").value;
        chrome.tabs.query({currentWindow:true,active:true},(tabs)=>{
            chrome.tabs.sendMessage(tabs[0].id,color)
        })
    }
},false)