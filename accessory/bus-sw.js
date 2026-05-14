/* シャトルバス時刻表 — Service Worker（通知クリックでページを開く） */
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

/* 将来、サーバーから Web Push する場合はここで受信可能 */
self.addEventListener('push', function (event) {
  var data = { title: 'シャトルバス', body: '' };
  if (event.data) {
    try {
      data = event.data.json();
    } catch (_) {
      data.body = event.data.text();
    }
  }
  var iconUrl = new URL('../images/logohedder.webp', self.location).href;
  event.waitUntil(
    self.registration.showNotification(data.title || 'シャトルバス', {
      body: data.body || '時刻をご確認ください',
      icon: iconUrl,
      badge: iconUrl,
      tag: data.tag || 'shuttle-bus',
      vibrate: [120, 80, 120]
    })
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var url = new URL('./bus.html', self.location).href;
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        var c = list[i];
        if (c.url.indexOf('bus.html') !== -1) {
          return c.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(url);
      }
    })
  );
});
