import { useLoaderData } from 'react-router-dom'
import { Drawer, DescriptionList } from '@components'
import { humanizeString } from '@helpers'
import { userDecorator } from '@decorators'

const User = () => {
  const data = useLoaderData()
  const [decoratedUser] = userDecorator([data])
  const { full_name, ...obj } = decoratedUser
  const items = Object.entries(obj).map(([key, value]) => (
    { label: humanizeString(key), value }
  ))

  return (
    <Drawer title={full_name}>
      {() => <DescriptionList items={items} />}
    </Drawer>
  )
}

export default User
