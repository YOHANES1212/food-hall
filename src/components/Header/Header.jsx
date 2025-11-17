import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url('/header_img.png')` }}>
        <div className="header-contents">
            <h2>Pilih makanan favorit Kesukaan Kamu</h2>
            <p>Pilihlah dari beragam menu yang menampilkan aneka hidangan lezat yang dibuat dengan bahan-bahan terbaik dan keahlian kuliner yang tinggi. Misi kami adalah memuaskan keinginan Anda dan meningkatkan pengalaman bersantap Anda, satu hidangan lezat pada satu waktu.</p>
            <button>Lihat Menu</button>
        </div>
    </div>
  )
}

export default Header