import React from 'react'
import { useState } from "react"

interface iFileList {
    list: string[]
    onSelect?: (img: string) => void
}


export default function MediaFileList({ list, onSelect = () => { } }: iFileList) {
    const [color, setColor] = useState(-1)
    return (
        <div className='grid grid-cols-2 md:grid-cols-6 gap-4'>
            {
                list.map((item, idx) => {
                    return <div onClick={() => {
                        onSelect(item)
                        setColor(idx)
                    }} key={idx} className={`bg-white  max-w-full border-2 p-1 cursor-pointer rounded ${color === idx ? "border-blue-500" : ""}`}>
                        <img className="w-full h-40 object-cover rounded" src={
                            item
                        } alt="" />
                    </div>
                })
            }
        </div>
    )
}
