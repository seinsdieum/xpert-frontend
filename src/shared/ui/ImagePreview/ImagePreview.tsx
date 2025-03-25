import { useCallback, useEffect, useState } from 'react';
import style from './ImagePreview.module.css';
import { ImageCollectionProps } from '../types';
import { HiDownload, HiPencil, HiTrash } from 'react-icons/hi';
import { useHotKey } from '@/shared/lib';
import InlineWrapper from '../InlineWrapper/InlineWrapper';
import { AnimatePresence, motion } from 'motion/react';

interface Props extends ImageCollectionProps {
    subtitle?: string;
    position: number;
}

const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
    exit: { color: 'transparent' }
};

const ImagePreview = ({ editing, ...props }: Props) => {
    const [position, setPosition] = useState(props.position);

    const nextPos = useCallback(() => {
        setPosition(prev =>
            props.imagesSrc && prev < props.imagesSrc.length - 1 ? prev + 1 : prev
        );
    }, []);
    const prevPos = useCallback(() => {
        setPosition(prev => (prev > 0 ? prev - 1 : prev));
    }, []);
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

    useHotKey(['ArrowLeft'], () => prevPos(), true);
    useHotKey(['ArrowRight'], () => nextPos(), true);

    return (
        <div className={style.wrapper}>
            <img src={props.imagesSrc?.[position]} />
            {editing && (
                <InlineWrapper className={style.bar}>
                    {editing.onDownload && (
                        <h2>
                            <HiDownload onClick={() => editing.onDownload?.(position)} />
                        </h2>
                    )}
                    {editing.onDelete && <HiTrash onClick={() => editing.onDelete?.(position)} />}
                    {editing.onEdit && <HiPencil onClick={() => editing.onEdit?.(position)} />}
                </InlineWrapper>
            )}
            <AnimatePresence>
                {props.subtitle !== undefined && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={subtitleVariants}
                        className={style.subtitle}
                    >
                        {props.subtitle}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImagePreview;
