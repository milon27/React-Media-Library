import React, { useState } from 'react'
import Button from './components/Button'
import Modal from './components/Modal'
import MediaLibrary from './MediaLibrary'

interface iSelectImageButton {
    title: string
    uploadUrl: string,// e.g. /uploadUrl
    previewList: string[]
    setPreviewList: React.Dispatch<React.SetStateAction<string[]>>
    onSelect: (_selected: string) => void
}

export default function SelectImageButton({
    title = "Select A Image",
    uploadUrl,
    previewList, setPreviewList, onSelect
}: iSelectImageButton) {
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState('')

    return (
        <>
            <Button title={title} onClick={() => setShow(true)} border={false} />

            <Modal
                hideTitle
                show={show}
                setShow={setShow}
                title="test"
                onSelect={() => {
                    if (selected == '') {
                        alert('Select A iamge first!')
                        return;
                    }
                    setShow(false)
                    onSelect(selected)
                }}
            >
                <MediaLibrary
                    uploadUrl={uploadUrl}
                    previewList={previewList}
                    setPreviewList={setPreviewList}
                    setSelected={setSelected}
                />
            </Modal>
        </>
    )
}
