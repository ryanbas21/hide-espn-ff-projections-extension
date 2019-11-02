chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            const listOfProjections = Array.from(
                document.getElementsByClassName("jsx-2810852873")
            ).filter(
                v =>
                    parseInt(v.innerHTML) &&
                    v.classList.contains("table--cell") &&
                    v.title.includes("points")
            );
            const value = listOfProjections[0];
            value.className += " hide-projections";
        }
    }, 0);
});
