chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == "clear") {
            var clearCookies = function(response) {
                var names = response.names;
                var url = response.url;
                console.log("in clear cookies" + url + names);
                names.forEach(function(name) {
                    chrome.cookies.remove({
                        "url": url,
                        "name": name
                    }, function(details) {
                        console.log(url + " COOKIES REMOVED");
                    });
                });
            }

            var promise = function(url) {
                var temp = new Promise(function(resolve, reject) {
                    var names = [];
                    chrome.cookies.getAll({
                        "url": url
                    }, function(cookies) {
                        cookies.forEach(function(cookie) {
                            names.push(cookie.name);
                        });
                        var responseData = {
                            "names": names,
                            "url": url
                        };
                        resolve(responseData);
                    })
                });
                return temp;
            }

            var hbr = promise("https://hbr.org");
            hbr.then(clearCookies);

            var medium = promise("https://medium.com");
            medium.then(clearCookies);

            var economist = promise("https://economist.com");
            economist.then(clearCookies);
        }
    });