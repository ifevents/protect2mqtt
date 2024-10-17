import mqtt from 'queue/index.js'
import protect from '@ifevents/evprotect'

mqtt({ uri: process.env.MQTT_URI })
  .then(mqtt => {
    const events = protect({
      // config
      domain: process.env.DOMAIN,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    })

    const callback = (topic, payload) => (
      nqtt.publishAsync(topic, payload, { qos: 2, retain: true })
    )

    return events(callback)
  })
