import mqtt from 'mqtt'

export default config => {
  return new Promise((resolve, reject) => {
    mqtt.connect(config.uri)
    mqtt.on('connect', () => resolve(mqtt))
  })
}
