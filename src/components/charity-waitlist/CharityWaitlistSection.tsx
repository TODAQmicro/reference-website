import { useEffect, useState } from "react";
import Logo from "../SVG/Logo";
import WaitlistModal from "./WaitlistModal";

declare global { 
  interface Window {
    ENV: { [key: string]: any }
  }
}

export default function CharityWaitlistSection() {
  const [ success, setSuccess ] = useState(false);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      document.addEventListener('purchase', () => {
        setSuccess(true);
      })
    }

    return () => { mounted = false; }
  }, []);

  return (
    <section className="section todaq-charity">
      <div className="container todaq-charity__wrapper">
        <div className="todaq-charity__content">
          <Logo width={200} />
          <h2 style={{ marginTop: '64px', color: '#595A5A' }}>
            <span>Welcome To The Micropay Liberation!</span>
          </h2>
          <h1 style={{ marginBottom: '64px' }}>
            <span className="block todaq-charity__topline">
              <span>Join 50+ visionary companies on our waitlist.</span>
            </span>
          </h1>
          <p style={{ color: '#595A5A' }}>
            Digital micropayments under a dollar allow business and consumer customers to purchase discrete digital services and content without need of registration, login or subscription.   Micropayments can be made without expensive merchant swipe, interchange and processing fees.
          </p>
          <p style={{ color: '#595A5A' }}>
            Micropayers have strong control of their funds and can micropay anywhere.
          </p>
          <p style={{ color: '#595A5A' }}>
            Businesses, creators, startups and all software API providers can power up their services and content with a simple low code integration.  Access unserved customers who have demand, but not enough to be locked into a subscription. 
          </p>
          <p style={{ color: '#595A5A' }}><strong>Be a pioneer in the first wave of micropayment powered companies.</strong></p>
          <p style={{ color: '#595A5A' }}>We are currently in our beta testing phase.  Mark your calendars for our full micropayment product launch in Jan 2024!</p>
          <p style={{ color: '#595A5A' }}><strong>Reserve your spot on the product waitlist by making a micropayment of $0.25 and try the technology for yourself.  It’s a simple one minute process to set  up a wallet, charge up a little bit of value, and make instant one-click micropayments from there.  To get an early taste, click the button below:</strong></p>
          <div style={{ marginTop: '32px' }} dangerouslySetInnerHTML={{
            __html: `
<script type="text/javascript" id="_TODAQMicroFrame-7d93f987-3e26-426d-8e3e-5d73ec33c7d3">
!function() {
  o = document.createElement("iframe"),
  o.allowtransparency="true",
  o.scrolling="no",
  o.frameborder=0,
  o.role="presentation",
  o.allow="payment *",
  o.width=124,
  o.height=44,
  o.style="border: 0 !important; background: transparent !important;",
  o.src = "https://pay.stage.m.todaq.net/embed/7d93f987-3e26-426d-8e3e-5d73ec33c7d3",
  n = document.getElementById("_TODAQMicroFrame-7d93f987-3e26-426d-8e3e-5d73ec33c7d3"),
  n.parentNode.insertBefore(o, n),
  w = window,
  w.addEventListener('message', (e) => {
    if(e.source === o.contentWindow) {
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
      } else if (e.data.includes('_TQMSuccess')) {
        document.dispatchEvent(new CustomEvent("purchase", { detail: '7d93f987-3e26-426d-8e3e-5d73ec33c7d3' }));
      }
    }
  }); 
}();
</script>
          `}} />
          <p style={{ color: '#595A5A' }}>
            Many other micropayable services and content will appear here over the next few months prior to launch, be sure to check in again.
          </p>
        </div>
      </div>
      {success ? <WaitlistModal onClose={() => {
        setSuccess(false);
      }} /> : null }
    </section>
  );
}
