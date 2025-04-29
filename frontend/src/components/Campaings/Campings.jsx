import "./Campaings.css";
import CampaingItem from "./CampaingItem";

const Campings = () => {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <CampaingItem />
          <CampaingItem />
        </div>

        <div className="campaigns-wrapper">
          <CampaingItem />
          <CampaingItem />
        </div>
      </div>
    </section>
  );
};

export default Campings;
