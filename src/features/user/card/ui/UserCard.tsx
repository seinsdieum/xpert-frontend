import { UserEntity } from '@/shared/types'
import style from './UserCard.module.css'
import { Button, Card, InlineWrapper } from '@/shared/ui'
import Avatar from '@/shared/ui/Avatar/ui/Avatar'
import { HiDotsHorizontal, HiMail } from 'react-icons/hi'
import { Section } from '@/shared/ui/Section'
import { Link } from 'react-router-dom'
import {
    HiChatBubbleBottomCenter,
    HiCog,
    HiNoSymbol,
    HiPencil
} from 'react-icons/hi2'
import DropoverButton from '@/shared/ui/DropoverButton/ui/DropoverButton'
import { VerticalMenu } from '@/shared/ui'
import { IconType } from 'react-icons/lib'

type Props = {
    user: UserEntity
    onMessage?: VoidFunction
    onBlock?: VoidFunction
    onSub?: VoidFunction
    onEdit?: VoidFunction
    options?: Array<{ title?: string; icon?: IconType; onClick?: VoidFunction }>
}

const UserCard = ({
    user,
    options,
    onBlock,
    onMessage,
    onSub,
    onEdit
}: Props) => {
    return (
        <div className={style.wrapper}>
            <Card className={style.main}>
                <div className={style.info}>
                    <Avatar />
                    <div className={style.name}>
                        <h3>{user.name}</h3>
                        <p>
                            {user.firstname} {user.lastname}
                        </p>
                        <InlineWrapper>
                            <HiMail />
                            <Link to={`mailto:${user.email}`}>
                                <p>{user.email}</p>
                            </Link>
                        </InlineWrapper>
                    </div>
                </div>
                <div className={style.tools}>
                    <InlineWrapper>
                        {onMessage && (
                            <Button onClick={onMessage} className='inner'>
                                <HiChatBubbleBottomCenter />
                                <span className='desktop-only'>Написать</span>
                            </Button>
                        )}
                        {onEdit && (
                            <Button onClick={onEdit} className='inner'>
                                <HiPencil />
                                <span className='desktop-only'>
                                    Редактировать
                                </span>
                            </Button>
                        )}
                        {onBlock && (
                            <Button onClick={onBlock} className='inner'>
                                <HiNoSymbol />
                                <span className='desktop-only'>
                                    Заблокировать
                                </span>
                            </Button>
                        )}
                        {options && (
                            <DropoverButton
                                renderTrigger={onClick => (
                                    <Button className='inner' onClick={onClick}>
                                        <HiDotsHorizontal></HiDotsHorizontal>
                                    </Button>
                                )}
                                posY='b'
                                posX='l'>
                                <VerticalMenu
                                    className={'ui-shadow'}
                                    options={options}></VerticalMenu>
                            </DropoverButton>
                        )}
                    </InlineWrapper>
                </div>
            </Card>
            <Card className={style.about}>
                <Section title='О себе'>
                    <p>{user.bio}</p>
                </Section>
            </Card>
        </div>
    )
}

export default UserCard
