import style from './ImageIcon.module.css';

type Props = {
    src: string;
    className?: string;
};

const ImageIcon = (props: Props) => {
    return <img {...props} className={`${style.wrapper} ${props.className || null}`} />;
};

export default ImageIcon;
