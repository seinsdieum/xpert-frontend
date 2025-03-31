import { tasksRoute, usersRoute } from '@/shared/config'
import { downloadFile } from '@/shared/lib/files'
import { ContextAction, PostEntity } from '@/shared/types'
import {
    Button,
    Card,
    ImagePreview,
    ImageSlider,
    InlineWrapper,
    Modal
} from '@/shared/ui'
import { DropoverButton } from '@/shared/ui/DropoverButton'
import { VerticalMenu } from '@/shared/ui'
import { useState } from 'react'
import {
    HiArchive,
    HiAtSymbol,
    HiCheckCircle,
    HiDotsHorizontal,
    HiStatusOnline
} from 'react-icons/hi'
import { Link } from 'react-router-dom'

type Props = {
    payload: PostEntity
    options?: ContextAction[]
}
const MarketPost = (props: Props) => {
    const [previewIndex, setPreviewIndex] = useState(-1)

    return (
        <>
            <Modal
                hideHeader
                isOpen={
                    previewIndex !== -1 &&
                    props.payload.post_image !== undefined
                }
                onClose={() => setPreviewIndex(-1)}>
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
                            x =>
                                `http://localhost:3000/posts/image?name=${x.path}`
                        )}
                    />
                )}
            </Modal>
            <Card key={props.payload.id}>
                {props.payload.post_image?.length ? (
                    <ImageSlider
                        onClick={index => setPreviewIndex(index)}
                        imagesSrc={props.payload.post_image.map(
                            x =>
                                `http://localhost:3000/posts/image?name=${x.path}`
                        )}
                    />
                ) : (
                    ''
                )}
                <div className='card'>
                    <p className='break-word'>{props.payload.body}</p>
                </div>
                <InlineWrapper spaceBetween>
                    <InlineWrapper>
                        {props.payload.user?.name && (
                            <Link
                                to={`${usersRoute}/${props.payload.user.name}`}>
                                <Button className='inner'>
                                    <HiAtSymbol />
                                    {props.payload.user.name}
                                </Button>
                            </Link>
                        )}
                        {props.payload.task?.id && (
                            <Link to={`${tasksRoute}/${props.payload.task.id}`}>
                                <Button
                                    isActive={
                                        props.payload.task.task_status ===
                                        'pending'
                                    }
                                    className='inner'>
                                    {props.payload.task.task_status ===
                                    'pending' ? (
                                        <HiStatusOnline />
                                    ) : props.payload.task.task_status ===
                                      'archived' ? (
                                        <HiArchive />
                                    ) : (
                                        <HiCheckCircle />
                                    )}
                                    {props.payload.task.name}
                                </Button>
                            </Link>
                        )}
                    </InlineWrapper>
                    <DropoverButton
                        posX='l'
                        posY='b'
                        renderTrigger={handler => (
                            <Button onClick={handler} className='inner'>
                                {props.options ? (
                                    <HiDotsHorizontal />
                                ) : (
                                    new Date(
                                        props.payload.created_at
                                    ).toDateString()
                                )}
                            </Button>
                        )}>
                        <VerticalMenu
                            className='ui-shadow'
                            options={[
                                ...(props.options ?? []),
                                {
                                    title: `Создан: ${new Date(
                                        props.payload.created_at
                                    ).toDateString()}`
                                },
                                {
                                    title: `Изменен: ${new Date(
                                        props.payload.modified_at
                                    ).toDateString()}`
                                }
                            ]}></VerticalMenu>
                    </DropoverButton>
                </InlineWrapper>
            </Card>
        </>
    )
}

export default MarketPost
