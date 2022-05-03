import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { MediaLibrary, SelectImageButton } from '../src';

const meta: Meta = {
  title: 'Components'
};

export default meta;

export const MediaLibarayPage = () => {
  const [imageList, setImageList] = useState<string[]>([
    'https://images.unsplash.com/photo-1648737966837-66cc4a189b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1649482565637-68ce26ce5ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1649418824126-65f323a02c2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
  ] as string[])

  const UPLOAD_URL = '/upload';
  const onFileDelete = () => {

  }

  // load all images here which are already in the server
  // useEffect(() => {
  // axios.get('/get-all').then(listres => {
  //   const data = listres.data
  //   setImageList(data)
  // })
  // }, [])

  //axios implimentation of file delete
  // const url = previewList[selectedIndex]
  // const name = url.substring(url.lastIndexOf('/') + 1);
  // //const deleteUrl = '/file/:name'
  // const paramKey = deleteUrl.substring(deleteUrl.lastIndexOf(":") + 1)
  // axios.delete(deleteUrl, {
  //     params: {
  //         [paramKey]: name
  //     }
  // }).then(res => {
  //     console.log(res.data)
  //     setPreviewList(old => {
  //         old.splice(selectedIndex, 1)
  //         return old
  //     })
  // }).catch(e => {
  //     console.log(e)
  // })

  return <>
    <MediaLibrary uploadUrl={UPLOAD_URL} previewList={imageList} setPreviewList={setImageList} onFileDelete={(index: number) => {
      //do axios impliemntaion
      setImageList(old => {
        old.splice(index, 1)
        return old
      })
    }} />
  </>
}

export const SelectImageBtn = () => {
  const [imageList, setImageList] = useState<string[]>([
    'https://images.unsplash.com/photo-1648737966837-66cc4a189b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1649482565637-68ce26ce5ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1649418824126-65f323a02c2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
  ] as string[])

  const [select, setSelect] = useState<string[]>([])

  const UPLOAD_URL = '/upload';


  // load all images here which are already in the server
  // useEffect(() => {
  // axios.get('/get-all').then(listres => {
  //   const data = listres.data
  //   setImageList(data)
  // })
  // }, [])

  const onSelect = (url: string[]) => {
    setSelect(url)
  }

  return <>
    <SelectImageButton uploadUrl={UPLOAD_URL} title='Select Multiple Image' previewList={imageList} setPreviewList={setImageList} onSelect={onSelect} multiple={true} />

    <br /><br />
    {/* {select && <img className='w-36 h-36 object-cover' src={select} alt="" />} */}
    {select.toString()}

    <SelectImageButton uploadUrl={UPLOAD_URL} title='Select Single Image' previewList={imageList} setPreviewList={setImageList} onSelect={onSelect} multiple={false} />

  </>
}