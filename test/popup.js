document.getElementById("btn").addEventListener("click", async () => {
    //現在のタブのIDを取得する。
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    //タブに対して動作を実行する。
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: onRun,
    });
});

function onRun() {
    //背景の色を変更する。
    //document.body.style.backgroundColor = "#fcc";

    chrome.storage.sync.get(null, (options) => {
        document.body.style.backgroundColor = options.colorValue;
    });
}
