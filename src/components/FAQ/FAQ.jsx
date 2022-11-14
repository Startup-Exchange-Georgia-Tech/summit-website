import FAQCard from "./FAQCard/FAQCard";
import './FAQ.css'

export default function FAQ() {
  const questions = [
    {
      question: "What is SX Summit ATL?",
      answer:
        "SX Summit ATL offers students an opportunity to learn from notable founders & leaders in venture management, to gain access to opportunities at startups, and to connect with student founders. Connect with notable startups around Atlanta, plus student entrepreneurs from Georgia Tech, GSU, Emory University, UGA, Spelman College, & Morehouse College. Then, hear from a panel of notable founders who detail their journey through entrepreneurship.\n\nAfter, hear pitches from each team part of the Startup Exchange incubator program, as they compete for cash prizes and demo their product to investor judges to showcase their team's hard work.",
    },
    {
      question: "Why are we hosting SX Summit ATL?",
      answer:
        "SX Summit ATL is a celebration of innovation around the Atlanta area. \n\nSummit also celebrates a culmination of the semester’s efforts from the current cohorts of Startup Exchange, the largest student-led entrepreneurship community at Georgia Tech.",
    },
    {
      question: "Who attends SX Summit ATL?",
      answer:
        "Summit extends invitation to students and professionals in VC and entrepreneurship throughout the Atlanta area.\n\nThis includes students from Emory University, Georgia State, Spelman College, Morehouse College, University of Georgia.",
    },
    {
      question: "Why sponsor SX Summit ATL?",
      answer:
        "Sponsors would be given ample opportunity to tap into talent pipelines at Georgia Tech, Emory University, University of Georgia, Spelman College, and Morehouse College, promoting opportunities to members and the general public.\n\n",
    },
  ];
  return (
    <div className="FAQ">
      <h1 className="FAQ_title">FREQUENTLY ASKED QUESTIONS</h1>
      <div className="FAQ_container">
        {questions.map((q) => {
            return <FAQCard question={q.question} answer={q.answer}></FAQCard>
        })}
        
      </div>
    </div>
  );
}
