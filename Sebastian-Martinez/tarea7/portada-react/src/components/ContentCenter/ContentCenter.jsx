import AlertBox from "../AlertBox/AlertBox";
import SectionText from "../SectionText/SectionText";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ContentCenter.css";

const ContentCenter = () => {
  return (
    <section className="content-center">
      <section className="left-section" >

        <AlertBox text={"Exclusive news here"} />
        <section>
          <SectionTitle title={"ADELE"} />
          <SectionText
            text={
              "She is just one of the most important singer in the world currently "
            }
          />
        </section>

        <section>
          <SectionTitle size={80} title={"The Cyrus's siblings "} />
          <SectionText
            text={
              "The news about the new tour by Miley Cyrus and her what her family think about it "
            }
          />
        </section>

        <section >
          <SectionTitle size={80} title={"DEMI LOVATO"} />
          <SectionText
            text={
              "The news about the new tour by Miley Cyrus and her what her family think about it "
            }
          />
        </section>
        
      </section>
      <section className="right" >
        <AlertBox text={"Exclusive "} />
        <section className="right-bottom"  >
          <SectionTitle title={"ADELE"} />
          <SectionText
            text={
              "She is just one of the most important singer in the world currently "
            }
          />
        </section>
      </section>
    </section>
  );
};

export default ContentCenter;
