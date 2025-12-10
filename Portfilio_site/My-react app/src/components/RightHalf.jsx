import discordsvg from '../assets/discord.svg'
import linkedinsvg from '../assets/linkedin.svg'
import githubsvg from '../assets/github.svg'

function RightHalf(){

    const email = 'andilenkosi31@gmail.com';
    const location = 'Johannesburg, South Africa';
    const linkedin = 'https://linkedin.com/in/makhosandile-nkosi-453b8a321';
    const github = 'https://github.com/MSNkosi31';
    const discord = 'https://discord.com/users/693409569765982269';
    
    return(
        <div class="right">
                <div class="contact">
                <p>{email}</p>
                <p>{location}</p>
                <div class="icons">
                    <a href={linkedin}><img src={linkedinsvg} alt="Linkedin SVG" /></a>
                    <a href={github}><img src={githubsvg} alt="Github SVG" /></a>
                    <a href={discord}><img src={discordsvg} alt="Discord SVG" /></a>
                </div>
                </div>

                <nav class="nav">
                <a href="#">Projects</a><br></br>
                <a href="#">Education</a><br></br>
                <a href="#">Lanuages & Technologies</a><br></br>
                <a href="#">Contact Me</a><br></br>
                </nav>
            </div>
    )

}

export default RightHalf