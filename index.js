const http = require('http')
const url = require('url')
const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query
  console.log(query)
  const width = query.width || query.w || query.size || query.s || '100'
  const height = query.height || query.h || width
  let color = query.color || query.c || '#2B60D5'

  res.setHeader('Content-Type', 'image/svg+xml')
  res.setHeader('ETag', width + height + color)
  res.setHeader('Cache-Control', 'max-age=86400')
  res.end(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect id="Rectangle" fill="${color}" x="0" y="0" width="${width}" height="${height}"></rect>
</svg>`)
}).listen(PORT)

console.log('SWATCHES listening on %s', PORT)

