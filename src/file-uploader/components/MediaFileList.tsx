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
        <div className='grid grid-cols-2 md:grid-cols-6 gap-4'>
            {
                list.map((url, idx) => {
                    return <div onClick={() => {
                        addOrRemove(url)
                    }} key={idx} className={`bg-white  max-w-full border-2 p-1 cursor-pointer rounded ${selected.includes(url) ? "border-blue-500" : ""}`}>
                        <img className="w-full h-40 object-cover rounded" src={url} alt="" />
                    </div>
                })
            }
        </div>
    )
}


interface iMediaLibraryForPreview {
    previewList: string[]
}

export const MediaLibraryForPreview = ({ previewList }: iMediaLibraryForPreview) => {
    const [preview, setPreview] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined)

    return <>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-4 col-span-7'>
            {
                previewList.map((url, idx) => {
                    return <div onClick={() => {
                        setSelectedIndex(idx)
                        setPreview(true)
                    }} key={idx} className={`bg-white max-w-full border-2 p-1 cursor-pointer rounded ${selectedIndex == idx ? "border-blue-500" : ""}`}>
                        <img className="w-full h-40 object-cover rounded" src={url} alt="" />
                    </div>
                })
            }
        </div>

        <Modal
            show={preview}
            setShow={setPreview}
            title="Preview Image"
            hideFooter={true}
        >
            {
                selectedIndex !== undefined && <div className='block md:flex gap-4'>
                    <img className="min-w-[300px]  md:min-w-[430px] h-[388px] object-cover rounded" src={previewList[selectedIndex]} alt="" />
                    {/* <h1><b>URL</b>: {previewList[selectedIndex]}</h1> */}
                </div>
            }
        </Modal>
    </>
}