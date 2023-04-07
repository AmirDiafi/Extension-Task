chrome.runtime.onInstalled.addListener(function () {
  // MARK: OPEN IN NEW TAB
  // chrome.tabs.create({ url: 'index.html' })
  // MARK: OPEN IN POPUP
  chrome.windows.create({
    url: 'index.html',
    type: 'popup',
    width: 500,
    height: 500,
  })
})
