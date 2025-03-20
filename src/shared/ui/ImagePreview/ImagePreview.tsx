import { useEffect, useState } from 'react';
import style from './ImagePreview.module.css';
import { useHotKey } from '@/shared/lib';
import { ImageCollectionProps } from '../types';

interface Props extends ImageCollectionProps {
    subtitle?: string;
    position?: number;
    onClose?: () => void;
}

const ImagePreview = (props: Props) => {
    const [position, setPosition] = useState(-1);

    const nextPos = () => {
        setPosition(prev =>
            props.imagesSrc && prev < props.imagesSrc.length - 1 ? prev + 1 : prev
        );
    };
    const prevPos = () => {
        setPosition(prev => (prev > 0 ? prev - 1 : prev));
    };
    useEffect(() => {
        if (
            props.imagesSrc &&
            props.position &&
            props.position > 0 &&
            props.position < props.imagesSrc.length + 1
        )
            setPosition(props.position);
        else if (props.imagesSrc && props.imagesSrc.length > 0) setPosition(0);
    }, [props.position]);

    useHotKey(['Escape'], props.onClose, true);
    useHotKey(['ArrowRight'], nextPos, true);
    useHotKey(['ArrowLeft'], prevPos, true);
    return (
        <div onFocusCapture={props.onClose} className={style.wrapper}>
            {position > 0 && <button onClick={prevPos}>prev</button>}
            <img src={props.imagesSrc?.[position]} />
            {props.imagesSrc && position < props.imagesSrc.length - 1 && (
                <button onClick={nextPos}>next</button>
            )}
            {props.subtitle && (
                <div className={style.subtitle}>
                    <p>{props.subtitle}</p>
                </div>
            )}
        </div>
    );
};

export default ImagePreview;
