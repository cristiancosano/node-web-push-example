self.addEventListener('push', function(e) {
  console.log('test sw')
    const message = e.data.json() // 1
  
    const options = { // 2
      body: message.description,
      data: message.link,
      icon: 'https://listas.alinatal.es/img/cropped-alinatal-512x512-180x180.jpg',
      image: 'https://listas.alinatal.es/img/cropped-alinatal-512x512-180x180.jpg',
      badge: 'https://listas.alinatal.es/img/cropped-alinatal-512x512-180x180.jpg',
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