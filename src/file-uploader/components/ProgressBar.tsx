import React from 'react'
interface iProgressBar {
    title?: string
    progress: number
}

export default function ProgressBar({ title = "", progress = 0 }: iProgressBar) {
    return (
        <div className="w-full bg-gray-200 rounded-full my-4">
            <div className="bg-black-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${progress}%` }}>{title} {progress}%</div>
        </div>
    )
}
