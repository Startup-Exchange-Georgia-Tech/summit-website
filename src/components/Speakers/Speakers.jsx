import "./Speakers.css";

export default function Speakers() {
  return (
    <div className="speakers" id="speakers">
      <div className="speakers_content">
        <h1 className="speakers_title">SPEAKERS & JUDGES</h1>
        <h2 className="speakers_subheading">Pitch Competition Judges</h2>
        <div className="speakers_card_container">
          <div className="speaker_card">
            <div className="speaker_card_left">
              <div className="speaker_card_left_container">
                <img src="images/chrisk.png" className="speaker_img"></img>
                <div className="speaker_name_container">
                  <h3 className="speaker_name">Chris Klaus</h3>
                  <div className="speaker_pos">Founder & CTO</div>
                </div>
              </div>
            </div>
            <div className="speaker_card_right">
              <div className="speaker_card_right_content">
                <div className="accomplishment_text">
                  Notable Accomplishments<br></br>
                  <br></br>
                </div>
                Founder & CTO, Internet Security Systems.<br></br>
                Sold to IBM for $1.3B in 2006. <br></br>
                <br></br>
                Founder & CEO, Kaneva.<br></br>
                Gaming platform with 5+ million users.<br></br>
                <br></br>
                Co-Founder, NeuroLaunch.<br></br>
                Business accelerated focused in neurotech.<br></br>
                <br></br>
              </div>
            </div>
          </div>
          <div className="speaker_card">
            <div className="speaker_card_left">
              <div className="speaker_card_left_container">
                <img src="images/kathrynp.png" className="speaker_img"></img>
                <div className="speaker_name_container">
                  <h3 className="speaker_name">Kathryn Petralia</h3>
                  <div className="speaker_pos">Founder & COO</div>
                </div>
              </div>
            </div>
            <div className="speaker_card_right">
              <div className="speaker_card_right_content">
                <div className="accomplishment_text">
                  Notable Accomplishments<br></br>
                  <br></br>
                </div>
                Co-Founder & COO, Kabbage<br></br>
                $10B+ in capital to SBMs in 8 countries<br></br>
                <br></br>
                5x Founder<br></br>
                Three $9M+ evaluations, Crunchbase<br></br>
                <br></br>
                Forbes most powerful women in the world<br></br>
              </div>
            </div>
          </div>
          <div className="speaker_card">
            <div className="speaker_card_left">
              <div className="speaker_card_left_container">
                <img src="images/melissap.png" className="speaker_img"></img>
                <div className="speaker_name_container">
                  <h3 className="speaker_name">Melissa Pegus</h3>
                  <div className="speaker_pos">MD, Techstars</div>
                </div>
              </div>
            </div>
            <div className="speaker_card_right">
              <div className="speaker_card_right_content">
                <div className="accomplishment_text">
                  Notable Accomplishments<br></br>
                  <br></br>
                </div>
                Managing Director at Techstars Atlanta<br></br>
                <br></br>
                Instructor at MIT Enterprise Forum<br></br>
                <br></br>
                Entrepreneur In Residence, Tech Square Ventures<br></br>
                <br></br>
                CRO, mBolden (acquired by She Runs It)<br></br>
                <br></br>
                SVP & Head of Strategic Partnerships, MPP Global<br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="images/speakers_image.png" className="speakers_image"></img>
    </div>
  );
}
