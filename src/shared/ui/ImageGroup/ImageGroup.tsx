import { memo, Suspense, useId } from 'react';
import style from './ImageGroup.module.css';
import { stubImage } from '@/assets/product/images';
type Props = {
    srcCollection: string[];
    inner?: boolean;
};

const ImageGroup = (props: Props) => {
    return (
        <div className={style.wrapper}>
            <Suspense fallback={<img className={style.big} src={stubImage} />}>
                <img className={style.big} src={props.srcCollection[0]} />
            </Suspense>
            {props.srcCollection.length > 1 ? (
                <div className={style.stack}>
                    {props.srcCollection.slice(1, 3).map(x => (
                        <Suspense fallback={<img src={stubImage} />}>
                            <img src={x} />
                        </Suspense>
                    ))}
                    {props.srcCollection.length > 3 ? <button>Ещё</button> : ''}
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default ImageGroup;
