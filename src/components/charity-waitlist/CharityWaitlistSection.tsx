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
<script type="text/javascript" id="_TODAQMicroFrame-7d93f987-3e26-426d-8e3e-5d73ec33c7d3">!function() {
  o = document.createElement("iframe"),
  o.allowtransparency="true",
  o.scrolling="no",
  o.frameborder=0,
  o.role="presentation",
  o.allow="payment *",
  o.width=124,
  o.height=44,
  o.style="border: 0 !important; background: transparent !important;",
  o.src = "http://localhost:8500/embed/7d93f987-3e26-426d-8e3e-5d73ec33c7d3",
  n = document.getElementById("_TODAQMicroFrame-7d93f987-3e26-426d-8e3e-5d73ec33c7d3"),
  n.parentNode.insertBefore(o, n),
  w = window,
  w.addEventListener('message', (e) => {
    if(e.source === o.contentWindow) {
      console.log('MSG', e);
      if(e.data.includes('_TQMResize')) {
        d = JSON.parse(e.data.split(';')[1]),
        o.width = d.width,
        o.height = d.height,
        o.style.position = 'relative';
      } else if (e.data.includes('_TQMFullScreen')) {
        o.style.position = 'absolute',
        o.style.top = 0,
        o.style.bottom = 0,
        o.style.left = 0,
        o.style.right = 0,
        o.width = '100%',
        o.height = '100%';
      }
    }
  }); }();
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
