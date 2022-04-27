import React, { createContext, useState } from 'react'
import Button from './components/Button'
import Modal from './components/Modal'
import MediaLibrary from './MediaLibrary'

interface iSelectImageButton {
    title: string
    uploadUrl: string,// e.g. /uploadUrl
    previewList: string[]
    setPreviewList: React.Dispatch<React.SetStateAction<string[]>>
    multiple?: boolean
    onSelect: (_selected: string[]) => void
}

interface iContext {
    multiple: boolean,
    selected: string[]
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
}
export const SelectImageContext = createContext<iContext>({} as iContext)

export default function SelectImageButton({
    title = "Select A Image",
    uploadUrl,
    previewList, setPreviewList, multiple = false, onSelect
}: iSelectImageButton) {
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState<string[]>([])

    const contextValue = {
        multiple, selected, setSelected
    } as iContext

    return (
        <SelectImageContext.Provider value={contextValue}>
            <Button title={title} onClick={() => setShow(true)} border={false} />

            <Modal
                hideTitle
                show={show}
                setShow={setShow}
                title=""
                onSelect={() => {
                    if (selected.length < 1) {
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
                    isSelect={true}
                />

            </Modal>
        </SelectImageContext.Provider>
    )
}
