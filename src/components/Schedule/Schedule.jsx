import "./Schedule.css";

export default function Schedule() {
  return (
    <div className="schedule" id="schedule">
      <div className="schedule_content">
        <h1>SCHEDULE</h1>
        <div className="schedule-container">
          <div className="schedule-item">
            <div className="schedule-item-time">
              <b>5:00</b>
            </div>
            <div className="schedule-item-content">
              <div>Startup Booth Expo + Networking</div>
            </div>
          </div>
          <div className="schedule-item">
            <div className="schedule-item-time">
              <b>5:30</b>
            </div>
            <div className="schedule-item-content">
              <div>Food + Drinks Available</div>
            </div>
          </div>
          <div className="schedule-item">
            <div className="schedule-item-time">
              <b>6:00 - 6:30</b>
            </div>
            <div className="schedule-item-content">
              <div>Welcome + Fireside chat</div>
              <div><b>Opening Remarks -</b>Georgia Tech Startup Exchange</div>
              <div><br></br></div>
              <b>Fireside Chat</b>
              <div>Obi Akpuda, Program Manager, Microsoft for Startups</div>
            </div>
          </div>
          <div className="schedule-item">
            <div className="schedule-item-time">
              <b>6:30-8:00</b>
            </div>
            <div className="schedule-item-content">
              <div>Startup Exchange Fellowship Pitch Competition</div>
              <div><b>Opening Remarks</b> - Aazan, Co-Director of Incubator, GT Startup Exchange</div>
              <br></br>
              <div>Team Pitches (4 min. each)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
