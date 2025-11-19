import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useRevalidator } from 'react-router-dom'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

const Drawer = ({ title, reload = false, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { revalidate } = useRevalidator()
  const navigate = useNavigate()

  const onClose = useCallback(() => {
    setIsOpen(false)
    setTimeout(() => {
      navigate(-1)

      if (reload)
        revalidate()
    }, 500)
  }, [])

  useEffect(() => setIsOpen(true), [])

  return (
    <Dialog open={isOpen} className="relative z-80" onClose={onClose}>
      <div className="fixed inset-0 bg-neutral-900 opacity-50" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              className="pointer-events-auto w-screen max-w-2xl transform transition
                         duration-500 ease-in-out data-closed:translate-x-full sm:duration-500"
              transition
            >
              <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold text-gray-500">
                      {title}
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative rounded-md bg-white text-gray-400
                                 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500
                                  focus:ring-offset-2 focus:outline-hidden"
                        onClick={onClose}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-4 flex-1 px-4 sm:px-6">
                  {children}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  reload: PropTypes.bool,
  title: PropTypes.string.isRequired
}

export default Drawer
