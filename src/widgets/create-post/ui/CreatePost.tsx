import { Button, Card, ImagePack, ImagePreview, InlineWrapper, TextArea } from '@/shared/ui';
import { HiCheck, HiChevronDown, HiPhotograph, HiUpload } from 'react-icons/hi';
import style from './CreatePost.module.css';
import { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react';
import { randomString, truncate } from '@/shared/lib';
import { uploadFile } from '@/shared/api';
const CreatePost = () => {
    const session = useRef(randomString(20));
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviewIndex, setImagePreviewIndex] = useState<number | null>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    const [body, setBody] = useState('');

    const [imagesState, setImagesState] = useState<Array<0 | 1 | 2 | 3>>([]);

    const loadFile = useCallback(() => {
        fileRef.current?.click();
    }, []);

    const deleteImage = useCallback((index: number) => {
        setImages(prev => {
            const updated = [...prev];
            updated.splice(index, 1);
            return updated;
        });
    }, []);

    const loadImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target?.files || e.target.files.length > 10) return;
        setImages(prev => [...prev, ...(e.target.files || [])]);
    }, []);

    const swapImages = useCallback((startIndex: number, endIndex: number) => {
        setImages(prev => {
            const imgs = [...prev];
            [imgs[startIndex], imgs[endIndex]] = [imgs[endIndex], imgs[startIndex]];
            return imgs;
        });
    }, []);

    const truncatedBody = useMemo(() => {
        return truncate(body, 50);
    }, [body]);

    const imagesSrc = useMemo(() => {
        setImagesState(new Array(images.length).fill(0));
        return images.map(file => URL.createObjectURL(file));
    }, [images]);

    const uploadImages = async () => {
        const arr = [];
        setImagesState(new Array(images.length).fill(1));
        setTimeout(async () => {
            for (let i = 0; i < images.length; i++) {
                uploadFile('/posts', images[i], session.current)
                    .then(res => {
                        setImagesState(prev => {
                            const a = [...prev];
                            a[i] = 2;
                            return a;
                        });
                        arr.push(res.data.path);
                    })
                    .catch(err => {
                        setImagesState(prev => {
                            const a = [...prev];
                            a[i] = 3;
                            return a;
                        });
                    });
            }
        }, 500);
    };

    return (
        <>
            <Card className={style.wrapper}>
                {imagePreviewIndex !== null ? (
                    <ImagePreview
                        subtitle={truncatedBody}
                        onClose={() => setImagePreviewIndex(null)}
                        position={imagePreviewIndex}
                        imagesSrc={imagesSrc}
                    />
                ) : null}
                {imagesSrc.length > 0 && (
                    <ImagePack
                        states={imagesState}
                        onClick={i => setImagePreviewIndex(i)}
                        editing={{ onDelete: deleteImage, onSwap: swapImages }}
                        imagesSrc={imagesSrc}
                    />
                )}
                <TextArea
                    value={body}
                    onChange={setBody}
                    limit={100}
                    placeholder="Напишите что-нибудь о себе..."
                />
                <InlineWrapper>
                    <Button onClick={loadFile} className="inner">
                        <HiPhotograph />
                        <input
                            style={{ display: 'none' }}
                            onChange={loadImages}
                            accept=".png, .jpg, .jpeg"
                            ref={fileRef}
                            type="file"
                            multiple
                            maxLength={10}
                        ></input>
                        {images.length > 0 && images.length}
                    </Button>
                    <Button className="inner">
                        <HiChevronDown />
                        Задача
                    </Button>
                    <Button onClick={uploadImages} className="inner">
                        <HiCheck />
                        Опубликовать
                    </Button>
                </InlineWrapper>
            </Card>
        </>
    );
};

export default CreatePost;
