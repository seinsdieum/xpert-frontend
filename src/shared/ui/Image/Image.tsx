import style from './Image.module.css';
type Props = {
    src: string;
};
const Image = (props: Props) => {
    return <img className={style.wrapper} src={props.src}></img>;
};

export default Image;
