const humanizeString = str => str
  .replace(/_/gu, ' ')
  .replace(/\b\w/gu, char => char.toUpperCase())

export { humanizeString }