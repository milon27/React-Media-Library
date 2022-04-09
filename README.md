# React Media Library (like wordpress media library)

Compitable with react js and next js.

## Installation Commands

```bash
npm install axios react-media-library
```

### How to use

1. import css in index.js/ts or app.jsx or app.tsx. (if tailwind project import it after main tailwind css)

```ts
import 'react-media-library/dist/react-media-library.css';
```
2. Create the media library page

```tsx
import { MediaLibrary, SelectImageButton } from 'react-media-library';

const MediaLibraryPage=()=>{
  const UPLOAD_URL = '/upload';
  const GET_ALL_IMAGE_API_URL = '/get-all';
  const [imageList, setImageList] = useState<string[]>([] as string[])
  
  // load all images here which are already in the server
  useEffect(() => {
    axios.get(GET_ALL_IMAGE_API_URL).then(listres => {
      const data = listres.data
      setImageList(data)
    })
  }, [])

  return <div>
      <MediaLibrary uploadUrl={UPLOAD_URL} previewList={imageList} setPreviewList={setImageList} />
  </div>
}

```

3. Create a select button that will upload and select image

```tsx
import { MediaLibrary, SelectImageButton } from 'react-media-library';

const SelectImagePage=()=>{
  const UPLOAD_URL = '/upload';
  const GET_ALL_IMAGE_API_URL = '/get-all';
  const [imageList, setImageList] = useState<string[]>([] as string[])
  const [select, setSelect] = useState("")
  
  // load all images here which are already in the server
  useEffect(() => {
    axios.get(GET_ALL_IMAGE_API_URL).then(listres => {
      const data = listres.data
      setImageList(data)
    })
  }, [])

  const onSelect = (url: string) => {
    setSelect(url)
  }

  return <>

    <SelectImageButton uploadUrl={UPLOAD_URL} title='Select Image' previewList={imageList} setPreviewList={setImageList} onSelect={onSelect} />

    <br /><br />
    {select && <img className='w-36 h-36 object-cover' src={select} alt="" />}

  </>
}

```

> screenshot

![screenshot](https://github.com/milon27/react-media-ilbrary/raw/master/media-lib.png)
![screenshot](https://github.com/milon27/react-media-ilbrary/raw/master/media-lib-select.png)
