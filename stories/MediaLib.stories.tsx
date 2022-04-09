import React, { useState, useEffect } from 'react';
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

  // load all images here which are already in the server
  // useEffect(() => {
  // axios.get('/get-all').then(listres => {
  //   const data = listres.data
  //   setImageList(data)
  // })
  // }, [])


  return <>
    <MediaLibrary uploadUrl={UPLOAD_URL} previewList={imageList} setPreviewList={setImageList} />
  </>
}

export const SelectImageBtn = () => {
  const [imageList, setImageList] = useState<string[]>([
    'https://images.unsplash.com/photo-1648737966837-66cc4a189b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1649482565637-68ce26ce5ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1649418824126-65f323a02c2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
  ] as string[])

  const [select, setSelect] = useState("")

  const UPLOAD_URL = '/upload';


  // load all images here which are already in the server
  // useEffect(() => {
  // axios.get('/get-all').then(listres => {
  //   const data = listres.data
  //   setImageList(data)
  // })
  // }, [])

  const onSelect = (url: string) => {
    setSelect(url)
  }

  return <>
    <SelectImageButton uploadUrl={UPLOAD_URL} title='Select Image' previewList={imageList} setPreviewList={setImageList} onSelect={onSelect} />

    <br /><br />
    {select && <img className='w-36 h-36 object-cover' src={select} alt="" />}

  </>
}