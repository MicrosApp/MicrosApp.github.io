module.exports = {
    "@vuepress/pwa": {
        serviceWorker: true,
        updatePopup: {
            "/": {
                message: "New content is available.",
                buttonText: "Refresh"
            },
            "/zh/": {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }
    }
};