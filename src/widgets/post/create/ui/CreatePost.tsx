import { Button, Card, ImagePack, ImagePreview, InlineWrapper, Modal, TextArea } from '@/shared/ui';
import { HiCheck, HiChevronDown, HiPhotograph } from 'react-icons/hi';
import style from './CreatePost.module.css';
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { truncate } from '@/shared/lib';
import useDebounceUpdate from '../model/useDebounceUpdate';
import useImageUpload from '../model/useImageUpload';
import { useNavigate } from 'react-router-dom';
import usePublishPost from '../model/usePublishPost';
import { postsRoute } from '@/shared/config';
const CreatePost = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState<File[]>([]);
    const [previewIndex, setPreviewIndex] = useState<number>(-1);
    const fileRef = useRef<HTMLInputElement>(null);
    const [body, setBody] = useState('');
    const [postId, setPostId] = useState(-1);
    const [imagesState, setImagesState] = useState<Array<0 | 1 | 2 | 3>>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [errorLabel, setErrorLabel] = useState<string | null>('');

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
        setImagesState(prev => [
            ...prev,
            ...Array.from({ length: e.target.files?.length || 0 }, () => 0 as 0)
        ]);
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
        return images.map(file => URL.createObjectURL(file));
    }, [images]);

    const debounceUpdate = useDebounceUpdate(
        () => setIsUploading(true),
        err => {
            console.log(err);
            setIsUploading(false);
        },
        res => {
            if (res.id !== postId) setPostId(res.id);
            setIsUploading(false);
        }
    );

    const uploadImage = useImageUpload(
        postId,
        images,
        index => {
            setIsUploading(true);
            setImagesState(prev => {
                const updated = [...prev];
                updated[index] = 1;
                return updated;
            });
        },
        (err, index) => {
            console.log(err);
            setIsUploading(false);
            setImagesState(prev => {
                const updated = [...prev];
                updated[index] = 3;
                return updated;
            });
        },
        (res, index) => {
            console.log(res.filename);
            setIsUploading(false);
            setImagesState(prev => {
                const updated = [...prev];
                updated[index] = 2;
                return updated;
            });
        }
    );

    const publishPost = usePublishPost(
        postId,
        err => {
            console.log(err);
            setIsUploading(false);
        },
        res => navigate(`${postsRoute}${res.id}`)
    );

    const tryPublishPost = () => {
        if (!body && !images.length) {
            setErrorLabel('Введите данные');
            return;
        }
        setIsUploading(true);
        console.log('publishing');
        publishPost();
    };

    useEffect(() => {
        debounceUpdate(body, postId);
    }, [body]);

    useEffect(() => {
        for (let i = 0; i < images.length; i++) {
            if (!imagesState[i]) uploadImage(i);
        }
    }, [images]);

    return (
        <>
            <Card className={style.wrapper}>
                <Modal
                    hideHeader
                    isOpen={previewIndex !== -1 && images.length > 0}
                    onClose={() => setPreviewIndex(-1)}
                >
                    {images.length > 0 && (
                        <ImagePreview
                            subtitle={truncatedBody}
                            editing={{
                                onDelete(index) {
                                    deleteImage(index);
                                }
                            }}
                            position={previewIndex}
                            imagesSrc={imagesSrc}
                        />
                    )}
                </Modal>
                {imagesSrc.length > 0 && (
                    <ImagePack
                        states={imagesState}
                        onClick={i => setPreviewIndex(i)}
                        editing={{ onDelete: deleteImage, onSwap: swapImages }}
                        imagesSrc={imagesSrc}
                    />
                )}
                <TextArea
                    value={body}
                    onChange={text => {
                        setBody(text);
                    }}
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
                    <Button onClick={tryPublishPost} disabled={isUploading} className="inner">
                        <HiCheck />
                        Опубликовать
                    </Button>
                    {isUploading && <p>Подгружаемся</p>}
                    <p>{errorLabel || 'нет ошибок'}</p>
                </InlineWrapper>
            </Card>
        </>
    );
};

export default CreatePost;
