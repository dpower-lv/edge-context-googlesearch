browser.contextMenus.removeAll();

browser.contextMenus.create({
    "title": "Search Google for '%s'",
    "contexts": ["selection"],
    "onclick": function (info, tab) {
        browser.tabs.create({
            url: "https://www.google.com/search?q=" + encodeURIComponent(info.selectionText)
        });
    }
});

browser.contextMenus.create({
    "title": "Search Google for image",
    "contexts": ["image"],
    "onclick": function (info, tab) {
        browser.tabs.create({
            url: "https://images.google.com/searchbyimage?image_url=" + encodeURIComponent(info.srcUrl)
        });
    }
});
