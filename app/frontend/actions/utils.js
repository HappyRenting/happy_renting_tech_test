const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'x-csrf-token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
}

export { headers }
