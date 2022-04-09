import React, { useState } from 'react'
import MediaFileList from './components/MediaFileList'
import FileUploader from './components/FileUploader'
import Button from './components/Button'

interface iMediaLibrary {
    uploadUrl: string,// e.g. /uploadUrl
    previewList: string[]
    setPreviewList: React.Dispatch<React.SetStateAction<string[]>>
    setSelected?: React.Dispatch<React.SetStateAction<string>>
}

export default function MediaLibrary({ uploadUrl, previewList, setPreviewList, setSelected }: iMediaLibrary) {
    const [show, setShow] = useState(false)

    return (
        <div>
            <div className='flex justify-between items-center mb-4 '>
                <h1 className='font-bold text-2xl'> Media Library </h1>

                <Button title="Upload New Image" onClick={() => { setShow(true) }} />
            </div>
            {
                show && <FileUploader uploadUrl={uploadUrl} setOpen={setShow} setPreviewList={setPreviewList} />
            }


            <MediaFileList list={previewList} onSelect={(img) => {
                setSelected ? setSelected(img) : console.log('show popup with image details')
            }} />
        </div>
    )
}
