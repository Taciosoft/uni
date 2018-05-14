import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    
    render() { 
        return ( 
            <div>
                <section className="section" style={{paddingTop:'60px'}}>
                    <div className="container is-fullhd">
                    <h1 className="subtitle is-1">Office 365 ออกแบบมาเพื่อธุรกิจของคุณ</h1>
                    <h2 className="subtitle is-4">
                    <p>ลงทะเบียนเพื่อรับข้อมูลเพิ่มเติมเกี่ยวกับ Office 365</p>
                    <p>เพื่อรับการติดต่อกลับจากไมโครซอฟท์</p>
                    <p className="telephone">โทรฟรี 1800 012 705</p>
                    </h2>
                    <div className="field is-grouped">
                    <p className="control">
                        <a className="button" style={{backgroundColor:'#FD3801',color:'#FFFFFF'}}>
                        ลงทะเบียน
                        </a>
                    </p>
                    <p className="control">
                        <a className="button" style={{backgroundColor:'#FD3801',color:'#FFFFFF'}}>
                        แชทกับเรา
                        </a>
                    </p>
                    </div>
                    </div>
                </section>
            </div>
         )
    }
}
 
export default Header;