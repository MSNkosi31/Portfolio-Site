import Typewriter from "./Typewriter";

function LeftHalf(){

    const qualification = "Bacholar of Information Technology";
    const description = "I am an aspiring software engineer with hands-on experience in several languages and various development tools. I enjoy building practical, user-focused solutions and continuously expanding my technical toolkit through new projects and challenges. With a strong foundation in both frontend and backend development, I’m always exploring new technologies and refining my skills to grow into a well-rounded, impactful engineer";

    return(
            <div class="left">
                <h1>Makhosandile (Sifiso) Nkosi</h1>
                <p>{qualification}</p>
                <p class="subtitle"><Typewriter text={description} speed={35} /></p>
            </div>
        
    )
}

export default LeftHalf