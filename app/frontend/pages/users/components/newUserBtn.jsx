import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@components'

const NewUserBtn = () => {
  const navigate = useNavigate()
  const onClick = useCallback(() => navigate('new'), [])

  return (
    <Button onClick={onClick}>
      Create new user
    </Button>
  )
}

export default NewUserBtn
