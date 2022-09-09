import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"


const LandingModal = ({ open, setOpen }: any) => {

  function closeModal() {
    setOpen(false)
  }

  return (
    <Transition appear show={open} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-60" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-700 p-6 text-left align-middle shadow-xl transition-all">
                    <div>
                      <span className="text-white border-b pb- text-5xl lg:text-6xl">
                        Welcome!
                      </span>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                      <p className="text-white text-2xl lg:text-3xl">
                        Sorting algorithms are fascinating 🤯 and we all enjoy to visualize them in action.
                      </p>
                      <p className="text-white text-2xl lg:text-3xl">
                        You can select your favorite algorithm, change the speed as fast (or slow) as you want, set the size of the array to sort and start visualizing.
                      </p>
                      <p className="text-white text-2xl lg:text-3xl">
                        Once the sort starts, you'll need to wait until it finishes to customize the sorter. Have fun!
                      </p>
                    </div>
  
                    <div className="mt-6">
                      <button
                        type="button"
                        className="w-1/2 focus:outline-none bg-orange-100 text-3xl rounded hover:bg-orange-300"
                        onClick={closeModal}
                      >
                        Got it
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
  )
  
}

export default LandingModal