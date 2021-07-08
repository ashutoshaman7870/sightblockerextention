chrome.webRequest.onBeforeRequest.addListner(
    function(details){return{cancle:true}},

    {urls:["/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/"]},
    ["blocking"]
    
)