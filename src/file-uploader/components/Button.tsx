import React from 'react'

export default function Button({ title, onClick, border = true }: {
    title: string,
    border?: boolean,
    onClick: () => void
}) {
    if (border) {
        return (
            <button className="rml-text-gray-600 rml-bg-white hover:rml-bg-gray-100 focus:rml-ring-4 focus:rml-ring-gray-300 rml-rounded-lg rml-border rml-border-gray-200 rml-text-sm rml-font-medium rml-px-5 rml-py-2.5 hover:rml-text-gray-900 focus:rml-z-10 " onClick={onClick}>{title}</button>
        )
    } else {
        return (
            <button className="rml-text-white rml-bg-slate-700 hover:rml-bg-slate-800 focus:rml-ring-4 focus:rml-ring-blue-300 rml-font-medium rml-rounded-lg rml-text-sm rml-px-5 rml-py-2.5 rml-text-center" onClick={onClick}>{title}</button>
        )
    }
}
