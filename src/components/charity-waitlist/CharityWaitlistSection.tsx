import TestQRCode from "../SVG/TestQRCode";
import TQ from "../SVG/TQ";

export default function CharityWaitlistSection() {
      

  return (
    <section className="section todaq-charity">
      <div className="container todaq-charity__wrapper">
        <div className="todaq-charity__two-thirds">
          <h1>
            <span className="block todaq-charity__topline">
              <span>62 Companies Joined</span>
            </span>
          </h1>
          <h2>
            <span>120 companies on the waitlist.</span>
          </h2>
          <div style={{display: 'flex', justifyContent: 'right' }} dangerouslySetInnerHTML={{
            __html: `
<!-- TODAQ Micro, NOTE(mihok): Assume only 1 button per page for now.. -->
<script type="text/javascript" id="todaq_micropay">
  !function() {
    o = document.createElement("script"),
    o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://cdn.stage.m.todaq.net/bundle.js",
    n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
  }();
</script>
          `}} />
          <h3 style={{textAlign:'right'}}>Get access to the upcoming Test Lab.</h3>
          <p style={{textAlign:'right'}}>
            We're opening up our micropayment platform beginning in
            mid-September 2023. Get your chance to begin offering micro
          </p> 
        </div>
      </div>
    </section>
  );
}
