self.addEventListener('push', function(e) {
    const message = e.data.json() // 1
  
    const options = { // 2
      body: message.description,
      data: 'http://localhost:80',
      actions: [
        {
          action: 'Detail',
          title: 'Detalles'
        }
      ]
    };
  
    e.waitUntil(self.registration.showNotification(message.title, options)) // 3
})

self.addEventListener('notificationclick', function(e) {
    console.log('Notification click Received.', e.notification.data)
  
    e.notification.close() // 1
    e.waitUntil(clients.openWindow(e.notification.data)) // 2
})