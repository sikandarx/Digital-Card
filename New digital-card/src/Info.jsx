import './App.css'
import copy from './assets/copy.png'
import picture from './assets/picture.jpg'
import mail from './assets/mail.png'
import linkedin from './assets/linkedin.png'
import About from './About.jsx'
import Interests from './Interests.jsx'


function Info(){
    return(
        <>
        <div className='modal' id='myModal'>
            <div className='modal-content'>
            <span class="close">&times;</span>
                <div class='d-flex mod'>
                sikandarhb@gmail.com
                <img src={copy} alt='copy icon' className='modal-img' onClick={copyEmail}/>
                </div>
            </div>
            <div className='copied' id='copy'>
                Email Copied To Clipboard
            </div>
        </div>
        <img src={picture} alt=' ' className='picture'/>
        <div className='mcont'>
            <div className='name'>M Sikandar Habib</div>
            <div className='designation'>Full Stack Developer</div>
            <div className='d-flex buttons m-4'>
                <button type='button' className='email-btn' onClick={ToEmail}>
                    <div className='d-flex button'>
                    <img src={mail} alt='Mail Icon'/>
                    <div>Email</div>
                    </div>
                </button>
                <button type='button' className='linkedin-btn' onClick={ToLinkedIn}>
                    <div className='d-flex button'>
                    <img src={linkedin} alt='LinkedIn Icon'/>
                    <div>LinkedIn</div>
                    </div>
                </button>
            </div>
            <About />
            <Interests />
        </div>
        </>
    )
}
const ToLinkedIn = () => 
{
    window.open("https://www.linkedin.com/in/sikandar-habib/", "_blank");
}
const ToEmail = () =>
{
    
    const modal = document.getElementById("myModal")

    function openModal() {
        modal.style.display = "flex"
    }

    function closeModal() {
        modal.style.display = "none"
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal()
        }
    }
    document.querySelector(".close").addEventListener("click", closeModal)
    openModal()
    }
const copyEmail = () =>
{
    const textToCopy = "sikandarhb@gmail.com";

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    
    document.body.appendChild(textArea);
    
    textArea.select();
    
    document.execCommand("copy");
    
    document.body.removeChild(textArea);

    function TextCopied()
    {
        const copied = document.getElementById('copy');

        copied.style.display = "block";
        copied.classList.add("fadeIn");

        setTimeout(function() {
            copied.classList.remove("fadeIn");

            setTimeout(function() {
                copied.style.display = "none";
            }, 500);
        }, 500);
    }

    TextCopied()

}
export default Info