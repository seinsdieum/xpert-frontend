import { tasksRoute, usersRoute } from '@/shared/config';
import { downloadFile } from '@/shared/lib/files';
import { PostEntity } from '@/shared/types';
import { Button, Card, ImagePreview, ImageSlider, InlineWrapper, Modal } from '@/shared/ui';
import { useState } from 'react';
import { HiArchive, HiAtSymbol, HiCheckCircle, HiStatusOnline } from 'react-icons/hi';
import { Link } from 'react-router-dom';

type Props = {
    payload: PostEntity;
};
const MarketPost = (props: Props) => {
    const [previewIndex, setPreviewIndex] = useState(-1);

    return (
        <>
            <Modal
                hideHeader
                isOpen={previewIndex !== -1 && props.payload.post_image !== undefined}
                onClose={() => setPreviewIndex(-1)}
            >
                {props.payload.post_image && (
                    <ImagePreview
                        subtitle={props.payload.body}
                        editing={{
                            onDownload: idx =>
                                props.payload.post_image
                                    ? downloadFile(
                                          `http://localhost:3000/posts/image?name=${props.payload.post_image[idx].path}`,
                                          props.payload.post_image[idx].path
                                      )
                                    : undefined
                        }}
                        position={previewIndex}
                        imagesSrc={props.payload.post_image.map(
                            x => `http://localhost:3000/posts/image?name=${x.path}`
                        )}
                    />
                )}
            </Modal>
            <Card key={props.payload.id}>
                {props.payload.post_image?.length ? (
                    <ImageSlider
                        onClick={index => setPreviewIndex(index)}
                        imagesSrc={props.payload.post_image.map(
                            x => `http://localhost:3000/posts/image?name=${x.path}`
                        )}
                    />
                ) : (
                    ''
                )}
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
        </>
    );
};

export default MarketPost;
