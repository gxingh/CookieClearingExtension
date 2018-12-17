chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "clear"){
    	console.log('CLEARING COOKIES');
    	var names = [];
        chrome.cookies.getAll({
            "url": "https://hbr.org"
        }, function(cookies) {
            console.log(cookies.length);
            cookies.forEach(function(cookie) {
                names.push(cookie.name);
            });
            names.forEach(function(name) {
                chrome.cookies.remove({
                    "url": "https://hbr.org",
                    "name": name
                }, function(details) {
                    console.log("HBR COOKIES REMOVED");
                });
            });
        });
    }
  });