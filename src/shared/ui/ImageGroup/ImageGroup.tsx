import { memo } from 'react';
import style from './ImageGroup.module.css';
import { stubImage } from '@/assets/product/images';

type Props = {
    srcCollection: string[];
    inner?: boolean;
};

const MAX_IMAGES = 3;

const ImageGroup = memo(({ srcCollection }: Props) => {
    if (!srcCollection.length) return null;

    return (
        <>
            <div className={style.wrapper}>
                <img
                    className={style.big}
                    src={srcCollection[0]}
                    alt=""
                    onError={e => (e.currentTarget.src = stubImage)}
                />

                {srcCollection.length > 1 && (
                    <div className={style.stack}>
                        {srcCollection.slice(1, MAX_IMAGES).map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt=""
                                onError={e => (e.currentTarget.src = stubImage)}
                            />
                        ))}
                        {srcCollection.length > MAX_IMAGES && (
                            <button className="inner" type="button">
                                Смотреть все
                            </button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
});

export default ImageGroup;
