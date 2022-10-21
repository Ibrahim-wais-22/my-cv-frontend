import Image from 'next/image'
function ContactUs() {
    return (
        <div className="contactUs">
            <div className="titleCertifucates">
                <hr /> <h3>Certifucates</h3><hr />
            </div>
            
                <h2 > Bachelor`s degree in Computer Science, Shendi University</h2>
                
            
            <div className="titleCertifucates hrSkills">
                <hr /> <h3>skills </h3><hr />
            </div>
            <div className="skillList">
                <div className="skillList1">

           <h3>HTML</h3>
           <h3>JS</h3>
           <h3>CSS</h3>
           <h3>GIT</h3>
           <h3>github</h3>
           <h3>Reactjs</h3>
                </div>
                <div className="skillList2">

            <h3>Nextjs</h3>
            <h3>bootstrab</h3>
            <h3>json</h3>
            <h3>API</h3>
            <h3>python</h3>
            <h3>Django</h3>
                </div>
            </div>
            {/* <img src="/logo-linkedin.svg"  className="imgContact"/> */}
            <div className="titleCertifucates ">
                <hr /> <h3>contact my</h3><hr />
            </div>
            <div className="logos">

               
                <a href="https://github.com/Ibrahim-wais-22">
                <Image
                    src="/logo-github.svg"
                    alt="Landscape picture"
                    width={50}
                    height={50}
                />
                    {/* <img src="/logo-github.svg" alt="" className="imgContact"/> */}
                    </a>
                <a href="https://www.facebook.com/ibrahim.wais.1401">
                <Image
                    src="/logo-facebook.svg"
                    alt="Landscape picture"
                    width={50}
                    height={50}
                />
                    {/* <img src="/logo-facebook.svg" alt=""  className="imgContact"/> */}
                    </a>
                <a href="">
                <Image
                    src="/logo-linkedin.svg"
                    alt="Landscape picture"
                    width={50}
                    height={50}
                />
                    {/* <img src="/logo-linkedin.svg" alt=""  className="imgContact"/> */}
                    </a>
                <a href="https://twitter.com/Ibrahimibra22">
                <Image
                    src="/logo-twitter.svg"
                    alt="Landscape picture"
                    width={50}
                    height={50}
                />
                    {/* <img src="/logo-twitter.svg" alt="" className="imgContact" /> */}
                    </a>
                {/* <a href=""><img src="logo-instagram.svg" alt=""  className="imgContact"/></a> */}
            </div>
                
                
           
            <hr />
            <p className="pEmal">Email : ibrahimtur298@gmail.com</p>
            {/* <br /> */}
            <p>Cell phone :00967773030624</p>
            
        </div>
    )
  }
  
export default ContactUs
  