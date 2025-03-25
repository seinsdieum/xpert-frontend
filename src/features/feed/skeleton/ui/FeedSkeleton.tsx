import style from './FeedSkeleton.module.css';

type Props = {
    length?: number;
};

const FeedSkeleton = ({ length = 2 }: Props) => {
    return (
        <>
            {...Array.from({ length }).map((_, index) => (
                <div className={style.skeleton} key={index}>
                    <div className={style.image}></div>
                    <div className={style.buttons}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FeedSkeleton;
