import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import ProgressBar from './ProgressBar'
import axios from 'axios'

interface iFileUploader {
    uploadUrl: string,// e.g. /uploadUrl
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setPreviewList: React.Dispatch<React.SetStateAction<string[]>>
}

export default function FileUploader({ uploadUrl, setPreviewList, setOpen }: iFileUploader) {

    const [tmpList, setTmpList] = useState<File[]>([])
    //const [current, setCurrent] = useState<number>(-1)
    const [progress, setProgress] = useState<number | undefined>(undefined)

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles: File[], _rejectedFiles) => {
            setTmpList(old => {
                const tmp = [...old, ...acceptedFiles]
                return tmp;
            })
        }
    })


    // upload here based on current index
    useEffect(() => {
        // go for next
        // length comtece
        if (tmpList.length > 0) {

            const ob = new FormData()
            ob.append('img', tmpList[0], tmpList[0]?.name)

            console.log('start uploading....', tmpList[0]?.name);

            axios.post(uploadUrl, ob, {
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent
                    let percentage = Math.floor(loaded * 100 / total)
                    console.log("percentage: ", percentage);
                    setProgress(percentage)
                }
            }).then(res => {
                setPreviewList(prev => {
                    let p = [res.data, ...prev]
                    return p;
                })
                // preview done.
                tmpList.shift()
                setProgress(undefined)
                console.log(res.data);
            }).catch(e => {
                tmpList.shift()
                setProgress(undefined)
                alert(e.message)
                console.log(e);
            })

        } else {
            setProgress(undefined)
            console.log("tmpList is empty");
        }
    }, [tmpList.length])


    return (
        <div className='rml-relative'>
            <span className='rml-absolute rml-top-2 rml-right-4 '>

                <button className="rml-text-gray-600 rml-bg-white hover:rml-bg-gray-100 focus:rml-ring-4 focus:rml-ring-gray-300 rml-rounded-lg rml-border rml-border-gray-200 rml-text-sm rml-font-medium rml-px-2.5 rml-py-2.5 hover:rml-text-gray-900 focus:rml-z-10 " onClick={() => setOpen(false)} type="button" >
                    <svg className="rml-w-5 rml-h-5 rml-rounded-lg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
            </span >
            <div className='rml-w-full rml-min-h-[180px] rml-border-4 rml-rounded rml-border-dotted rml-flex rml-flex-col rml-justify-center rml-items-center rml-p-4 rml-my-4 ' {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    (isDragActive) ? <> <h1 className='rml-text-gray-700 rml-font-bold rml-text-lg '>Drop files to upload</h1></> :
                        <>

                            <h1 className='rml-text-gray-700 rml-text-2xl '>Drop files to upload</h1>
                            or
                            <div className='rml-text-gray-600 rml-text-xl '>Select Files</div>
                            {/* <p className='text-gray-600  text-sm '>Maximum upload file size: 5 MB.</p> */}

                        </>
                }

            </div>
            {
                progress !== undefined && <ProgressBar title={tmpList[0]?.name || ""} progress={progress} />
            }

        </div >

    )
}
