module.exports = (req, res) => {
  const query = req.query
  const width = Number(query.width || query.w || query.size || query.s || '150')
  const outerWidth = width + 12
  const height = Number(query.height || query.h || width)
  const outerHeight = height + 50
  const color = query.color || query.c || 'hotpink'
  const label = query.name || color

  res.setHeader('Content-Type', 'image/svg+xml')
  res.setHeader('ETag', `${width}-${height}-${color}-${label}`)
  res.setHeader('Cache-Control', 'public, max-age=31536000')
  res.send(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <svg width="${outerWidth}px" height="${outerHeight}px" viewBox="0 0 ${outerWidth} ${outerHeight}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect fill="#FFFFFF" x="0" y="0" width="${outerWidth}" height="${outerHeight}"></rect>
    <rect fill="${color}" x="6" y="6" width="${width}" height="${height}"></rect>
    <text font-family="-apple-system,BlinkMacSystemFont,'avenir next',avenir,helvetica,'helvetica neue',ubuntu,roboto,noto,'segoe ui',arial,sans-serif" font-size="16" font-weight="bold" fill="#4A4A4A">
      <tspan x="7" y="${height + 34}">${label}</tspan>
    </text>
  </svg>
  `)
}
