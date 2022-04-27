import React from 'react'
import Button from './Button'

interface iModal {
    hideTitle?: boolean
    hideFooter?: boolean
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    title: string
    children: React.ReactNode
    onSelect?: () => void
}
export default function Modal({ hideTitle = false, hideFooter = false, show = false, setShow, title, onSelect = () => { }, children }: iModal) {
    return (
        <div aria-hidden="true" className={show === true ? " bg-slate-900 flex bg-opacity-60 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 bottom-0 z-50 justify-center items-center h-modal md:h-full md:inset-0" : "hidden"}>
            <div className="relative px-4 w-full max-w-6xl max-h-[85vh] md:h-auto">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow ">

                    {hideTitle === true ? <></> :
                        <>
                            <div className="flex justify-between items-start p-5 rounded-t border-b ">
                                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl ">
                                    {title}
                                </h3>

                                <button onClick={() => setShow(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                            </div>
                        </>}

                    {/* end Modal header */}

                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                        {
                            children
                        }
                    </div>
                    {/* Modal footer */}
                    {
                        hideFooter == false && <div className="flex justify-end items-center px-6 pb-6 space-x-2 rounded-b ">
                            <Button title="Cancel" onClick={() => { setShow(false) }} />
                            <Button title="Select" onClick={onSelect} border={false} />
                        </div>
                    }

                </div>
            </div>
        </div>

    )
}
