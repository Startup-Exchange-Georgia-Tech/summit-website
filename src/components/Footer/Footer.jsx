import './Footer.css'

export default function Footer() {
    return (
        <div className="footer" id='contact'>
            <div className="footer_content">
                <img src="images/hero_image.png" className='footer_image'></img>
                <div className="footer_list">
                    <h3 className='footer_list_title'>CONTACT</h3>
                    <div className='footer_list_contact'>partnerships@startup.exchange</div>
                </div>
                <div className="footer_list">
                    <h3 className='footer_list_title'>FOllOW US</h3>
                    <div className='footer_list_links'>
                        <a className='footer_link' href='https://www.instagram.com/gtstartupexchange/'>Ig</a>
                        <a className='footer_link' href='https://www.linkedin.com/company/gtstartupexchange/'>Li</a>
                        <a className='footer_link' href='https://www.facebook.com/groups/startupexchange'>Fb</a>
                        <a className='footer_link' href='https://twitter.com/startupxchange'>Tw</a>
                    </div>
                </div>
            </div>
        </div>
    )
}