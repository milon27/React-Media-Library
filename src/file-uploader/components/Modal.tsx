import React from 'react'
import Button from './Button'

interface iModal {
    hideTitle?: boolean
    hideFooter?: boolean
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    title: string
    children: React.ReactNode
    btnTitle?: string
    onSelect?: () => void
}
export default function Modal({ hideTitle = false, hideFooter = false, show = false, setShow, title, onSelect = () => { }, btnTitle = "Select", children }: iModal) {
    return (
        <div aria-hidden="true" className={show === true ? " rml-bg-slate-900 rml-flex rml-bg-opacity-60 rml-overflow-y-auto rml-overflow-x-hidden rml-fixed rml-right-0 rml-left-0 rml-top-0 rml-bottom-0 rml-z-50 rml-justify-center rml-items-center rml-h-modal md:rml-h-full md:rml-inset-0" : "rml-hidden"}>
            <div className="rml-relative rml-px-4 rml-w-max rml-max-w-6xl rml-max-h-[85vh] md:rml-h-auto">
                {/* Modal content */}
                <div className="rml-relative rml-bg-white rml-rounded-lg rml-shadow ">

                    {hideTitle === true ? <></> :
                        <>
                            <div className="rml-flex rml-justify-between rml-items-start rml-p-5 rml-rounded-t rml-border-b ">
                                <h3 className="rml-text-xl rml-font-semibold rml-text-gray-900 lg:rml-text-2xl ">
                                    {title}
                                </h3>

                                <button onClick={() => setShow(false)} type="button" className="rml-text-gray-400 rml-bg-transparent hover:rml-bg-gray-200 hover:rml-text-gray-900 rml-rounded-lg rml-text-sm rml-p-1.5 rml-ml-auto rml-inline-flex rml-items-center " data-modal-toggle="defaultModal">
                                    <svg className="rml-w-5 rml-h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                            </div>
                        </>}

                    {/* end Modal header */}

                    {/* Modal body */}
                    <div className="rml-p-6 rml-space-y-6">
                        {
                            children
                        }
                    </div>
                    {/* Modal footer */}
                    {
                        hideFooter == false && <div className="rml-flex rml-justify-end rml-items-center rml-px-6 rml-pb-6 rml-space-x-2 rml-rounded-b ">
                            <Button title="Cancel" onClick={() => { setShow(false) }} />
                            <Button title={btnTitle} onClick={onSelect} border={false} />
                        </div>
                    }

                </div>
            </div>
        </div>

    )
}
