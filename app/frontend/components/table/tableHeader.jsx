import classNames from 'classnames'
import { tablePropTypes } from './propTypes'

const TableHeader = ({ header }) => {
  const thClasses = header.map(({ classes, headerClasses }) =>
    classNames(
      'px-3 py-3.5 text-left text-sm font-semibold text-gray-900',
      headerClasses,
      classes
    )
  )

  return (
    <thead>
      <tr>
        {header.map((col, index) => (
          <th scope="col" key={col.name || index} className={thClasses[index]}>
            {col.name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  header: tablePropTypes.isRequired
}

export default TableHeader
