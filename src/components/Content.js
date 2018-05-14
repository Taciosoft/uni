import React, { Component } from 'react'
import './Content.css'
class Content extends Component {
    
    render() { 
        return ( 
            <div>
            <section className="hero" style={{backgroundColor:'#FDEEEB'}}>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-mobile">
                        <div className="column">
                        <img src ="https://www.evolutionofwork.net/images/365-feature-1.jpg"/>
                        </div>
                        <div className="column">
                        <p>
                        <h1 className="subtitle is-1 h1">ทำงานได้ทุกที่ในทุกอุปกรณ์</h1>
                        <p className="subtitle is-5">ไม่ว่าคุณกำลังทำงานที่สำนักงานหรือกำลังเดินทาง คุณจะมีชุดเครื่องมือที่คุณคุ้นเคย ช่วยให้ทำงานได้อย่างมีประสิทธิภาพ ให้คุณสร้าง แก้ไข และแชร์จากพีซี/Mac หรืออุปกรณ์ iOS, Android™ หรือ Windows กับคนอื่นในแบบเรียลไทม์ พร้อมอัปเดต Office ให้เป็นเวอร์ชันล่าสุดเสมอโดยไม่มีค่าใช้จ่ายเพิ่มเติม</p>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section className="hero" style={{backgroundColor:'#FFFFFF'}}>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-mobile">
                        <div className="column">
                        <p>
                        <h1 className="subtitle is-1 h1">ทำงานได้อย่างต่อเนื่องไม่ว่าจะเปิดจากอุปกรณ์ใด</h1>
                        <p className="subtitle is-5">ทำงานได้ทุกที่ด้วยแอปพลิเคชัน Office ที่คุณชื่นชอบ เมื่อมีเหตุจำเป็นที่คุณต้องเดินทางออกนอกสถานที่ คุณสามารถแก้ไขงานเอกสารในตำแหน่งเดิมที่ค้างไว้ได้ทันที ไม่ว่าจะเปิดบนอุปกรณ์ใด</p>
                        </p>
                        </div>
                        <div className="column">
                        <img src ="http://offlinesoftwares.com/wp-content/uploads/2017/12/Microsoft-Office-365-working-on-all-devices.jpg" width="500"/>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section className="hero" style={{backgroundColor:'#FDEEEB'}}>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-mobile">
                        <div className="column">
                        <img src ="http://cdn1.itpro.co.uk/sites/itpro/files/styles/article_main_wide_image/public/2016/09/microsoft_365.jpg?itok=h7BiYEyZ"/>
                        </div>
                        <div className="column">
                        <p>
                        <h1 className="subtitle is-2 h1">ไม่ต้องกังวลกับการซื้อแอปแยก</h1>
                        <p className="subtitle is-5">คุณจะใช้งานได้ทั้งหมดในชุด Office ไม่ว่าจะเป็น Microsoft Word, Excel, PowerPoint, Outlook, OneNote, OneDrive รวมถึง Publisher และ Access ทุกอย่างที่คุณต้องการ</p>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            
            </div>
         )
    }
}
 
export default Content;