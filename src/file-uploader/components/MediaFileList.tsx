import React, { useContext, useState } from 'react'
import { SelectImageContext } from '../SelectImageButton'
import Modal from './Modal'

interface iFileList {
    list: string[]
}


export default function MediaFileListForSelect({ list }: iFileList) {
    const { multiple, selected, setSelected } = useContext(SelectImageContext)

    const addOrRemove = (url: string) => {
        //single image only
        if (multiple == false) {
            setSelected(_old => {
                return [url]
            })
            return;
        }
        if (selected.includes(url)) {
            setSelected(old => {
                const tmp = [...old]
                const idx = tmp.findIndex(item => item == url)
                tmp.splice(idx, 1)
                return [...tmp]
            })
        } else {
            setSelected(old => {
                return [...old, url]
            })
        }
    }

    return (
        <div className='rml-grid rml-grid-cols-2 md:rml-grid-cols-6 rml-gap-4'>
            {
                list.map((url, idx) => {
                    return <div onClick={() => {
                        addOrRemove(url)
                    }} key={idx} className={`rml-bg-white  rml-max-w-full rml-border-2 rml-p-1 rml-cursor-pointer rml-rounded ${selected.includes(url) ? "rml-border-blue-500" : ""}`}>
                        <img className="rml-w-full rml-h-40 rml-object-cover rml-rounded" src={url} alt="" />
                    </div>
                })
            }
        </div>
    )
}


interface iMediaLibraryForPreview {
    onFileDelete: (index: number) => void
    previewList: string[]
}

export const MediaLibraryForPreview = ({ onFileDelete, previewList }: iMediaLibraryForPreview) => {
    const [preview, setPreview] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined)

    return <>
        <div className='rml-grid rml-grid-cols-2 md:rml-grid-cols-6 rml-gap-4 rml-col-span-7'>
            {
                previewList.map((url, idx) => {
                    return <div onClick={() => {
                        setSelectedIndex(idx)
                        setPreview(true)
                    }} key={idx} className={`rml-bg-white rml-max-w-full rml-border-2 rml-p-1 rml-cursor-pointer rml-rounded ${selectedIndex == idx ? "rml-border-blue-500" : ""}`}>
                        <img className="rml-w-full rml-h-40 rml-object-cover rml-rounded" src={url} alt="" />
                    </div>
                })
            }
        </div>

        <Modal
            show={preview}
            setShow={setPreview}
            title="Preview Image"
            btnTitle='Delete'
            onSelect={() => {
                if (selectedIndex == undefined) {
                    return
                }
                onFileDelete(selectedIndex);
                setPreview(false)
            }}
        >
            {
                selectedIndex !== undefined && <div className='rml-block md:rml-flex rml-gap-4'>
                    <img className="rml-min-w-[300px]  md:rml-min-w-[430px] rml-h-[388px] rml-object-cover rml-rounded" src={previewList[selectedIndex]} alt="" />
                    {/* <h1><b>URL</b>: {previewList[selectedIndex]}</h1> */}
                </div>
            }
        </Modal>
    </>
}