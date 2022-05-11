# React Media Library (like wordpress media library)

Compitable with react js and next js.

## Installation Commands

```bash
npm install axios @milon27/react-media-library
```

### How to use

1. import css in index.js/ts or app.jsx or app.tsx.

```ts
import '@milon27/react-media-library/dist/react-media-library.css';
```
2. Create the media library page

```tsx
import { MediaLibrary, SelectImageButton } from '@milon27/react-media-library';

const MediaLibraryPage=()=>{
  const UPLOAD_URL = '/upload'; // upload endpoint should give back the full image url as string (this will visible as preview when upload a new image.) 
  const GET_ALL_IMAGE_API_URL = '/get-all';
  const [imageList, setImageList] = useState<string[]>([] as string[])
  
  // load all images here which are already in the server
  useEffect(() => {
    axios.get(GET_ALL_IMAGE_API_URL).then(listres => {
      const data = listres.data
      setImageList(data)
    })
  }, [])

  const deleteFile=(index:number)=>{
    const url = imageList[index]
    const name=url.substring(url.lastIndexOf('/') + 1);
    axios.delete('/file/:name', {
        params: {
            name: name
        }
    }).then(res => {
        console.log(res.data)
        setImageList(old => {
          old.splice(index, 1)
          return [...old]
        })
    }).catch(e => {
        console.log(e)
    })
  }

  return <div>
      <MediaLibrary uploadUrl={UPLOAD_URL} previewList={imageList} setPreviewList={setImageList} onFileDelete={(index: number) => {
      //do axios impliemntaion
      deleteFile(index);
    }} />
  </div>
}

```

3. Create a select button that will upload and select image

```tsx
import { MediaLibrary, SelectImageButton } from '@milon27/react-media-library';

const SelectImagePage=()=>{
  const UPLOAD_URL = '/upload';// upload endpoint should give back the full image url as string (this will visible as preview when upload a new image.)
  const GET_ALL_IMAGE_API_URL = '/get-all';
  const [imageList, setImageList] = useState<string[]>([] as string[])
  const [select, setSelect] = useState<string[]>([])
  
  // load all images here which are already in the server
  useEffect(() => {
    axios.get(GET_ALL_IMAGE_API_URL).then(listres => {
      const data = listres.data
      setImageList(data)
    })
  }, [])

  const onSelect = (urls: string[]) => {
    setSelect(urls)
  }

  return <>
    {/* multiple image select */}
    <SelectImageButton uploadUrl={UPLOAD_URL} title='Select Multiple Image' previewList={imageList} setPreviewList={setImageList} onSelect={onSelect} multiple={true} />

    {/* single image select */}
    <SelectImageButton uploadUrl={UPLOAD_URL} title='Select Single Image' previewList={imageList} setPreviewList={setImageList} onSelect={onSelect} multiple={false} />

    <br /><br />
    {select.toString()}

  </>
}

```

> screenshot

![screenshot](https://github.com/milon27/react-media-ilbrary/raw/master/media-lib.png)
![screenshot](https://github.com/milon27/react-media-ilbrary/raw/master/media-lib-select.png)
