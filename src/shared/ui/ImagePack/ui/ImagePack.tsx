import { useMemo, useState } from 'react';
import { ImageCollectionProps } from '../../types';
import style from './ImagePack.module.css';
import { HiX } from 'react-icons/hi';

const ImagePack = ({ imagesSrc, editing, onClick, states }: ImageCollectionProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [draggedIndex, setDraggedIndex] = useState(0);

    const orderedImages = useMemo(() => {
        if (!imagesSrc) return [];
        if (!isDragging || hoveredIndex === draggedIndex) return imagesSrc;

        return [
            ...imagesSrc.map((x, index) =>
                index === draggedIndex
                    ? imagesSrc[hoveredIndex]
                    : index === hoveredIndex
                    ? imagesSrc[draggedIndex]
                    : x
            )
        ];
        // dragging logic
    }, [isDragging, hoveredIndex, draggedIndex, imagesSrc]);

    const getStateClassName = (index: number) => {
        switch (states?.[index]) {
            case 0:
                return '';
            case 1:
                return style.loading;
            case 2:
                return style.success;
            case 3:
                return style.failed;
        }
    };

    return (
        <div className={style.wrapper}>
            {imagesSrc &&
                orderedImages.map((x, index) => (
                    <div
                        draggable={editing?.onSwap !== undefined}
                        onDragStart={() => {
                            if (!editing?.onSwap) return;
                            setIsDragging(true);
                            setHoveredIndex(index);
                            setDraggedIndex(index);
                        }}
                        onDragEnd={() => {
                            if (!editing?.onSwap || !isDragging) return;
                            if (index !== draggedIndex) {
                                editing?.onSwap?.(draggedIndex, hoveredIndex);
                            }
                            setIsDragging(false);
                        }}
                        onDragEnter={() => {
                            if (!editing?.onSwap) return;
                            if (isDragging) setHoveredIndex(index);
                        }}
                        key={x}
                        className={`${style.element} ${
                            isDragging && index === draggedIndex ? style.dragged : ''
                        } ${states?.length === imagesSrc.length ? getStateClassName(index) : ''}`}
                    >
                        {editing?.onDelete && (
                            <button onClick={() => editing?.onDelete?.(index)}>
                                <HiX />
                            </button>
                        )}
                        <img onClick={() => onClick?.(index)} src={x} />
                        {states?.[index] ? (
                            <div className={`${style.info} ${getStateClassName(index)}`}>
                                {states[index]}
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                ))}
        </div>
    );
};

export default ImagePack;
