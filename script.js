window.addEventListener('onWidgetLoad', function (obj) {
  let data = obj['detail']['session']['data'];
  let recents = obj['detail']['recents'];
  let currency = obj['detail']['currency'];
  let channelName = obj['detail']['channel']['username'];
  let apiToken = obj['detail']['channel']['apiToken'];
  let fieldData = obj['detail']['fieldData'];

  const newEle = document.createElement('div');
  newEle.textContent = `${data['follower-latest']['name']} hmm`;
  main.appendChild(newEle);
});
