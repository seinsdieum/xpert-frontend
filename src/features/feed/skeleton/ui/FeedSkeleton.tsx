type Props = {
    length?: number
}

const FeedSkeleton = ({ length = 2 }: Props) => {
    return (
        <>
            {...Array.from({ length }).map((_, index) => (
                <div className={'skeleton'} key={index}>
                    <div className={'image'}></div>
                    <div className={'buttons'}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default FeedSkeleton
