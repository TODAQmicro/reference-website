import TestQRCode from "../SVG/TestQRCode";
import TQ from "../SVG/TQ";

export default function CharityWaitlistSection() {
      

  return (
    <section className="section todaq-charity">
      <div className="container todaq-charity__wrapper">
        <div className="todaq-charity__two-thirds">
          <h1>
            <span className="block todaq-charity__topline">
              <span>Join</span>
              <span>62</span>
            </span>
            <span className="block todaq-charity__subline">
              <span>+</span>
              <span>0120</span>
            </span>
          </h1>
          <h2>
            <span>companies on the waitlist.</span>
          </h2>
        </div>
        <div className="todaq-charity__one-third">
          <div dangerouslySetInnerHTML={{
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

          <div className="TODAQMicro__embed">
            <TQ height={40}/>
            <div className="TODAQMicro__embed-wrapper">
              <span className="TODAQMicro__cost">0.250</span>
            </div>
            <TestQRCode />
          </div>
          <h3>Get access to the upcoming Test Lab.</h3>
          <p>
            We're opening up our micropayment platform beginning in
            mid-September 2023. Get your chance to begin offering micro
          </p> 
        </div>
      </div>
    </section>
  );
}
