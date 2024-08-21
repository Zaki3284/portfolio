
import './hero.css'
export default function hero() {
  return (
    <section className='hero flex'>
      <div className="left-section border ">

        <div className="parent-avatar">
          <img src="./me.png" className='avatar' alt="" />
          <span className='icon-verified'></span>
        </div>
        <h1 className='title'>Mohamed Hafedh</h1>
<p className='subtitle'>
    Étudiant en Informatique de Gestion
</p>


        <div className="icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation border">animation</div>
    </section>
  )
}
