import { HiChevronLeft, HiChevronRight, HiEye, HiPencil, HiTrash } from 'react-icons/hi';
import style from './ImageSlider.module.css';
import { useRef, useState } from 'react';
import InlineWrapper from '../../InlineWrapper/InlineWrapper';
import { ImageCollectionProps } from '../../types';

const ImageSlider = ({ imagesSrc, editing, onClick }: ImageCollectionProps) => {
    const [pos, setPos] = useState(0);
    const ref = useRef(null);
    return (
        <div ref={ref} className={style.wrapper}>
            <div
                style={{
                    transform: `translate(calc(-1 * 100% * ${pos}))`
                }}
                className={style.slider}
            >
                {imagesSrc?.map((x, index) => (
                    <img onClick={() => onClick?.(index)} key={x} src={x} />
                ))}
            </div>
            <button className={`${style.left} ${style.control}`}>
                <HiChevronLeft onClick={() => setPos(prev => (prev > 0 ? prev - 1 : prev))} />
            </button>
            {editing && (
                <InlineWrapper className={`${style.control} ${style.editing}`}>
                    {editing.onDelete && (
                        <button onClick={() => editing.onDelete?.(pos)}>
                            <HiTrash />
                        </button>
                    )}
                    {editing.onEdit && (
                        <button onClick={() => editing.onEdit?.(pos)}>
                            <HiPencil />
                        </button>
                    )}
                    {editing.onView && (
                        <button onClick={() => editing.onView?.(pos)}>
                            <HiEye />
                        </button>
                    )}
                </InlineWrapper>
            )}
            <button className={`${style.right} ${style.control}`}>
                <HiChevronRight
                    onClick={() =>
                        setPos(prev =>
                            imagesSrc && prev < imagesSrc?.length - 1 ? prev + 1 : prev
                        )
                    }
                />
            </button>
        </div>
    );
};

export default ImageSlider;
