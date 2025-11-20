import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import PropTypes from 'prop-types'

const Modal = ({ children }) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const onClose = useCallback(() => {
    setOpen(false)
    setTimeout(() => navigate(-1), 300)
  }, [])

  useEffect(() => setOpen(true), [])

  return (
    <Dialog open={open} className="relative z-10" onClose={onClose}>
      <DialogBackdrop
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        transition
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            transition
          >
            {children(onClose)}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired
}

export default Modal
