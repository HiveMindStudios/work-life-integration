function setColorHSLA(hue) {
  return `hsla(${hue % 360}, 96%, 63%, 1)`
}

export { setColorHSLA }