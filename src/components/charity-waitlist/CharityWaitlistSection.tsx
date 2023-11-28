import { useEffect, useState, useRef } from "react";
import Logo from "../SVG/Logo";
import WaitlistModal from "./WaitlistModal";

import circularEconnImage from "../../assets/images/cicle-circular-econn.png";
import moneyImage from "../../assets/images/circle-money.png";
import cheapImage from "../../assets/images/circle-cheap.png";
import handShakeImage from "../../assets/images/circle-handshake.png";
import valueImage from "../../assets/images/circle-value.png";
import {Checkmark} from "../SVG/Checkmark";

declare global { 
  interface Window {
    ENV: { [key: string]: any }
  }
}

export default function CharityWaitlistSection() {
  const companyRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [ success, setSuccess ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      document.addEventListener('purchase', () => {
        setSuccess(true);

        if (firstNameRef && firstNameRef.current) {
          firstNameRef.current.focus();
        }
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
            A low code solution to engage your unserved, unsubscribed customers through a one-tap pay for your services without need of login, registration or subscription. Receive payments under a dollar without expensive merchant swipe, interchange and processing fees.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <div>
              <h5>More Revenue</h5>
              <img src={moneyImage} alt="Image of a stack of cash" width={150} />
            </div>
            <div>
              <h5>Lower Costs</h5>
              <img src={cheapImage} alt="Graph trending downwards" width={150} />
            </div>
            <div>
              <h5>Faster Cash Cycle</h5>
              <img src={circularEconnImage} alt="Dollar sign" width={150} />
            </div>
            <div>
              <h5>Higher Margins</h5>
              <img src={valueImage} alt="Graph trending upwards" width={150} />
            </div>
            <div>
              <h5>Verified Real-time Data</h5>
              <img src={handShakeImage} alt="Two hands shaking together" width={150} />
            </div>
          </div>
          <p style={{ color: '#595A5A' }}><strong>Be a pioneer in the first wave of micropayment powered companies.</strong></p>
          <p style={{ color: '#595A5A' }}>We are currently in our beta testing phase.  Mark your calendars for our full micropayment product launch in Jan 2024!</p>
          <p style={{ color: '#595A5A' }}><strong style={{ color: '#DE1A4F' }}>Reserve your spot on the product waitlist by making a micropayment of $0.25 and try the technology for yourself.</strong>  It’s a simple one minute process to set  up a wallet, charge up a little bit of value, and make instant one-click micropayments from there.  To get an early taste, click the button below:</p>

          <div style={{ position: 'relative', marginTop: '64px', display: 'flex', justifyContent: 'center', border: '2px solid grey', paddingTop: '64px' }}>
            <div className="todaq-charity__tile" style={{ display: success ? 'none' : 'flex' }}>
              <div>
                <h2>Join the waitlist</h2>
                <p>Make a micropayment to join the waitlist!</p>
              </div>
              <div className="todaq-charity__micropay" dangerouslySetInnerHTML={{
                __html: `
    <script type="text/javascript" id="_TODAQMicroFrame-228df298-617c-4364-966e-a332896faaf9">
    !function() {
      o = document.createElement("iframe"),
      o.allowtransparency="true",
      o.scrolling="no",
      o.frameborder=0,
      o.role="presentation",
      o.allow="payment *",
      o.width=137,
      o.height=48,
      o.style="border: 0 !important; background: transparent !important;",
      o.src = "https://pay.stage.m.todaq.net/embed/228df298-617c-4364-966e-a332896faaf9",
      n = document.getElementById("_TODAQMicroFrame-228df298-617c-4364-966e-a332896faaf9"),
      n.parentNode.insertBefore(o, n),
      w = window,
      w.addEventListener('message', (e) => {
        if(e.source === o.contentWindow) {
          if(e.data.includes('_TQMResize')) {
            d = JSON.parse(e.data.split(';')[1]),
            o.width = d.width,
            o.height = d.height,
            o.style.position = 'relative';
          } else if (e.data.includes('_TQMCook')) {
            document.cookie = '__todaqm=' + e.data.split(';')[1];
          } else if (e.data.includes('_TQMFullScreen')) {
            o.style.position = 'fixed',
            o.style.top = 0,
            o.style.bottom = 0,
            o.style.left = 0,
            o.style.right = 0,
            o.width = '100%',
            o.height = '100%';
          } else if (e.data.includes('_TQMSuccess')) {
            document.dispatchEvent(new CustomEvent("purchase", { detail: '228df298-617c-4364-966e-a332896faaf9' }));
          }
        }
      }); 
    }();
    </script>
              `}} />
            </div>
            <div className={`todaq-charity__modal-wrapper ${!success ? 'hide': ''}`} style={{ width: '100%' }}>
              <h2>Fill out below to join</h2>
              <p>Enter your details below to be included in the next lab sessions.</p>
              <fieldset className="todaq-charity__modal-fieldset">
                <legend className="todaq-charity__modal-legend">
                  Your Name
                </legend>
                <div className="todaq-charity__modal-field">
                  <input className="todaq-charity__modal-input" ref={firstNameRef} type="text" placeholder="John" disabled={!success || loading} />
                  <input className="todaq-charity__modal-input" ref={lastNameRef} type="text" placeholder="Smith" disabled={!success || loading} />
                </div>
              </fieldset>

              <fieldset className="todaq-charity__modal-fieldset">
                <legend className="todaq-charity__modal-legend">
                  Company
                </legend>
                <div className="todaq-charity__modal-field">
                  <input className="todaq-charity__modal-input" ref={companyRef} type="text" placeholder="ACME Inc." disabled={!success || loading} />
                </div>
              </fieldset>
              <fieldset className="todaq-charity__modal-fieldset">
                <legend className="todaq-charity__modal-legend">
                  Role
                </legend>
                <div className="todaq-charity__modal-field">
                  <input className="todaq-charity__modal-input" ref={roleRef} type="text" placeholder="Chief Product Officer" disabled={!success || loading} />
                </div>
              </fieldset>
              <fieldset className="todaq-charity__modal-fieldset">
                <legend className="todaq-charity__modal-legend">
                  Email
                </legend>
                <div className="todaq-charity__modal-field">
                  <input className="todaq-charity__modal-input" ref={emailRef} type="text" placeholder="john@acme.inc" disabled={!success || loading} />
                </div>
              </fieldset>
              <div className="todaq-charity__modal-submit-wrapper">
                <button className="toda-charity__modal-submit" type="submit" onClick={async (e) => {
                  setLoading(true);

                  const response = await fetch(
                    '/api/v1/waitlist',
                    {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        companyName: companyRef.current?.value,
                        name: `${firstNameRef.current?.value} ${lastNameRef.current?.value}`,
                        role: roleRef.current?.value,
                        email: emailRef.current?.value,
                      })
                    },
                  );

                  setLoading(false);

                  if (response.ok) {
                    companyRef.current!.value = '';
                    firstNameRef.current!.value = '';
                    lastNameRef.current!.value = '';
                    roleRef.current!.value = '';
                    emailRef.current!.value = '';
                  } else {
                    console.error('ERROR', response.status);
                  }
                }}>
                  Submit
                </button>
              </div>

            </div>

          </div>

          <p style={{ color: '#595A5A' }}>
            Many other micropayable services and content will appear here over the next few months prior to launch, be sure to check in again.
          </p>
        </div>
      </div>
    </section>
  );
}
