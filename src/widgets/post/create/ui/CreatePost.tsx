import {
    Button,
    Card,
    ImagePack,
    ImagePreview,
    InlineWrapper,
    Modal,
    TextArea
} from '@/shared/ui'
import { HiCheck, HiPhotograph } from 'react-icons/hi'
import style from './CreatePost.module.css'
import {
    ChangeEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react'
import { truncate } from '@/shared/lib'
import usePostCreator from '../model/usePostCreator'
import usePostPublisher from '../model/usePostPublisher'
import usePostUpdater from '../model/usePostUpdater'
import useImageUploader from '../model/useImageUploader'
const CreatePost = () => {
    const [images, setImages] = useState<File[]>([])
    const [previewIndex, setPreviewIndex] = useState<number>(-1)
    const fileRef = useRef<HTMLInputElement>(null)
    const loadImage = useCallback(() => {
        fileRef.current?.click()
    }, [])
    const [body, setBody] = useState('')
    const truncatedBody = useMemo(() => {
        return truncate(body, 50)
    }, [body])
    // uploading
    const [isPublishing, setIsPublishing] = useState(false)

    const getPostId = usePostCreator(body)
    const publishPost = usePostPublisher()
    const [loadErrors, setLoadErrors] = useState<string[]>([])
    const { updatePost, current } = usePostUpdater()
    const { uploadImage, deleteImage, imageUploads } = useImageUploader()

    const onImageDelete = (index: number) => {
        setImages(prev => [...prev.filter((_, i) => i !== index)])
    }

    const tryPublishPost = async () => {
        setIsPublishing(true)
        publishPost(getPostId(), _ => setIsPublishing(false))
    }

    const loadImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target?.files || e.target.files.length > 10) return
        setImages(prev => [...prev, ...(e.target.files || [])])
        for (let i of e.target.files || []) {
            uploadImage(
                getPostId(),
                i,
                () => {},
                (index, msg) => {
                    onImageDelete(index)
                    setLoadErrors(prev => [...prev, msg])
                }
            )
        }
    }, [])

    const imagesSrc = useMemo(
        () => images.map(file => URL.createObjectURL(file)),
        [images]
    )

    useEffect(() => {
        if (isPublishing || !body) return
        updatePost(getPostId(), { body })
    }, [isPublishing, body])

    return (
        <Card className={style.wrapper}>
            <Modal
                onClose={() => setLoadErrors([])}
                isOpen={loadErrors.length > 0}
                header='Ошибка загрузки!'>
                {loadErrors.map(x => (
                    <p>{x}</p>
                ))}
            </Modal>
            <Modal
                hideHeader
                isOpen={previewIndex !== -1 && images.length > 0}
                onClose={() => setPreviewIndex(-1)}>
                {images.length > 0 && (
                    <ImagePreview
                        subtitle={truncatedBody}
                        position={previewIndex}
                        imagesSrc={imagesSrc}
                    />
                )}
            </Modal>
            {imagesSrc.length > 0 && (
                <ImagePack
                    onClick={i => setPreviewIndex(i)}
                    editing={{
                        onDelete(index) {
                            deleteImage(getPostId(), index, onImageDelete)
                        }
                    }}
                    imagesSrc={imagesSrc}
                />
            )}
            <TextArea
                value={body}
                onChange={text => {
                    setBody(text)
                }}
                limit={6000}
                placeholder='Напишите что-нибудь о себе...'
            />
            <InlineWrapper>
                <Button onClick={loadImage} className='inner'>
                    <HiPhotograph />
                    <input
                        style={{ display: 'none' }}
                        onChange={loadImages}
                        accept='.png, .jpg, .jpeg'
                        ref={fileRef}
                        type='file'
                        multiple
                        maxLength={10}></input>
                    {images.length > 0 && images.length}
                </Button>
                <Button onClick={tryPublishPost} className='inner'>
                    <HiCheck />
                    Опубликовать
                </Button>
            </InlineWrapper>
        </Card>
    )
}

export default CreatePost
