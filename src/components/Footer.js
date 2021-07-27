import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <p>Created by Chevano Simon.</p>
            <p>With the help of <a href='https://www.youtube.com/watch?v=w7ejDZ8SWv8'>Traversy Media</a></p>
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer
