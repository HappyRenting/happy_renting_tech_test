import { createRoot } from 'react-dom/client'
import { Users } from '@pages'

const domNode = document.getElementById('reactUsers')
const root = createRoot(domNode)

root.render(<Users />)
