import { fishImage } from '@/assets/demo/images';
import { tasksRoute, usersRoute } from '@/shared/config';
import { PostEntity } from '@/shared/types';
import { Button, Card, ImageGroup, InlineWrapper } from '@/shared/ui';
import { HiArchive, HiAtSymbol, HiCheckCircle, HiStatusOnline } from 'react-icons/hi';
import { Link } from 'react-router-dom';

type Props = {
    payload: PostEntity;
};
const MarketPost = (props: Props) => {
    return (
        <Card key={props.payload.id}>
            <ImageGroup srcCollection={[fishImage, fishImage, fishImage, fishImage]} />
            <div className="card">
                <p>{props.payload.body}</p>
            </div>
            <InlineWrapper spaceBetween>
                <InlineWrapper>
                    {props.payload.user?.name && (
                        <Link to={`${usersRoute}/${props.payload.user.name}`}>
                            <Button className="inner">
                                <HiAtSymbol />
                                {props.payload.user.name}
                            </Button>
                        </Link>
                    )}
                    {props.payload.task?.id && (
                        <Link to={`${tasksRoute}/${props.payload.task.id}`}>
                            <Button
                                isActive={props.payload.task.task_status === 'pending'}
                                className="inner"
                            >
                                {props.payload.task.task_status === 'pending' ? (
                                    <HiStatusOnline />
                                ) : props.payload.task.task_status === 'archived' ? (
                                    <HiArchive />
                                ) : (
                                    <HiCheckCircle />
                                )}
                                {props.payload.task.name}
                            </Button>
                        </Link>
                    )}
                </InlineWrapper>
                <Button className="inner">
                    {new Date(props.payload.created_at).toDateString()}
                </Button>
            </InlineWrapper>
        </Card>
    );
};

export default MarketPost;
