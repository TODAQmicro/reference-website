import AWS from "../SVG/AWS";
import Azure from "../SVG/Azure";
import GCP from "../SVG/GCP";

export default function CharityWaitlistPartners() {
  return (
    <section className="section todaq-partners">
      <div className="container todaq-partners__wrapper">
        <h3>Test Lab Partners</h3>
        <div className="todaq-partners__grid">
          <div className="todaq-partners__grid-item">
            <AWS width={128} />
          </div>
          <div className="todaq-partners__grid-item">
            <GCP width={150} />
          </div>
          <div className="todaq-partners__grid-item">
            <Azure />
          </div>
        </div>
      </div>
    </section>
  );
}
