import React from 'react'
interface iProgressBar {
    title?: string
    progress: number
}

export default function ProgressBar({ title = "", progress = 0 }: iProgressBar) {
    return (
        <div className="rml-w-full rml-bg-gray-200 rml-rounded-full rml-my-4">
            <div className="rml-bg-black-600 rml-text-xs rml-font-medium rml-text-blue-100 rml-text-center rml-p-0.5 rml-leading-none rml-rounded-full" style={{ width: `${progress}%` }}>{title} {progress}%</div>
        </div>
    )
}
