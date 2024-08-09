import './Footer.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const date = new Date().getFullYear();

    return (
        <footer>
            <p>© Copyright</p>
            <p>Farid Cure. All Rights Reserved</p>
            <p>{date}</p>
        </footer>
    )
}