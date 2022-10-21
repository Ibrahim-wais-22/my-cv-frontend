import Image from 'next/image';
function MyWorks() {
    // دالة تقوم باضهار المحتوى بعد الاسساره الى الصوره
    return (
        
        <div className="myWorks">
            <div className="container"><div className="card"> <a href="https://ibrahim-wais.herokuapp.com/" ><Image src="/bogeSite.png"alt="bogeSite" width={550} height={300}/></a></div></div>
            <div className="container"><div className="card"> <a href="https://ibrahim-wais-22.github.io/trainig-today-7/" ><Image src="/phoneShope.png"alt="phoneShope" width={550} height={300}/></a></div></div>
            <div className="container"><div className="card"><a href="https://ibrahim-wais-22.github.io/traning-day-6/"   ><Image src="/3.png"alt="Landscape picture" width={550} height={300}/></a></div></div>
            <div className="container"><div className="card"> <a href="https://ibrahim-wais-22.github.io/trainig-today-5/" ><Image src="/4.png"alt="Landscape picture" width={550} height={300}/></a></div></div>
            <div className="container"><div className="card"> <a href="https://ibrahim-wais-22.github.io/front-end/#" ><Image src="/5.png"alt="Landscape picture" width={550} height={300}/></a></div></div>
            <div className="container"><div className="card"> <a href="https://ibrahim-wais-22.github.io/kaizon-project-level1/" ><Image src="/6.png"alt="Landscape picture" width={550} height={300}/></a></div></div>
            <div className="container"><div className="card"> <a href="https://ibrahim-wais-22.github.io/my-app-next-js/" ><Image src="/7.png"alt="Landscape picture" width={550} height={300}/></a></div></div>
            <div className="container"><div className="card"> <a href="https://ibrahim-wais-22.github.io/day6-js/" ><Image src="/8.png"alt="Landscape picture" width={550} height={300}/></a></div></div>
           
            
            
        </div>
    )
  }
  
export default MyWorks
  