import './App.css'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import github from './assets/github.png'

function Footer(){
    return(
        <div className='footer'>
            <img src={facebook} alt='facebook icon' onClick={ToFacebook}/>
            <img src={instagram} alt='insagram icon' onClick={ToInstagram}/>
            <img src={github} alt='github icon' onClick={ToGithub}/>
        </div>
    )
}

const ToFacebook = () =>
{
    window.open("https://www.facebook.com/profile.php?id=100009536370888&mibextid=ZbWKwL", "_blank");
}
const ToInstagram = () =>
{
    window.open("https://www.instagram.com/sikandar.x/?hl=en", "_blank");
}
const ToGithub = () =>
{
    window.open("https://github.com/sikandarx", "_blank");
}


export default Footer