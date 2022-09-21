import AlertBox from "../AlertBox/AlertBox";
import SectionText from "../SectionText/SectionText";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ContentCenter.css";

const ContentCenter = () => {
  return (
    <div style={{ display: "flex", justifyContent:"space-between" }} className="content-center">
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems:"flex-start"}}>
        <AlertBox text={"Exclusive news here"} />
        <div>
          <SectionTitle title={"ADELE"} />
          <SectionText
            text={
              "She is just one of the most important singer in the world currently "
            }
          />
        </div>

        <div >
          <SectionTitle size={80} title={"The Cyrus's siblings "} />
          <SectionText
            text={
              "The news about the new tour by Miley Cyrus and her what her family think about it "
            }
          />
        </div>

        <div >
          <SectionTitle size={80} title={"DEMI LOVATO"} />
          <SectionText
            text={
              "The news about the new tour by Miley Cyrus and her what her family think about it "
            }
          />
        </div>
      </div>


      <div className="right" style={{  marginTop:"300px",height:"100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <AlertBox text={"Exclusive "} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
          <SectionTitle title={"ADELE"} />
          <SectionText
            text={
              "She is just one of the most important singer in the world currently "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCenter;
