import { Button, Modal } from '@/shared/ui'

type Props = {
    header: string
    isOpen?: boolean
    onClose: () => void
}

const ErrorModal = ({ header, onClose, ...modalProps }: Props) => {
    return (
        <Modal hideHeader isWrapperCloseDisabled {...modalProps}>
            <h2>{header}</h2>
            <p>Повторите попытку позже</p>
            <Button onClick={onClose}>Окей...</Button>
        </Modal>
    )
}

export default ErrorModal
