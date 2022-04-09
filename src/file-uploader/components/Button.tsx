import React from 'react'

export default function Button({ title, onClick, border = true }: {
    title: string,
    border?: boolean,
    onClick: () => void
}) {
    if (border) {
        return (
            <button className="text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 " onClick={onClick}>{title}</button>
        )
    } else {
        return (
            <button className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={onClick}>{title}</button>
        )
    }
}
