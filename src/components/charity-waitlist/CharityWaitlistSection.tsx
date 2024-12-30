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
  const useCaseRef = useRef<HTMLTextAreaElement>(null);

  const [ success, setSuccess ] = useState(false);
  const [ submitted, setSubmitted ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const [ isMobile, setIsMobile ] = useState(false);

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

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      if (document && document.body.clientWidth >= 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }

    return () => { mounted = false; }
  }, []);

  return (
    <section className="section todaq-charity">
      <div className="container todaq-charity__wrapper">
        <div className="todaq-charity__content">
          <Logo width={200} />
          <h2 style={{ marginTop: '64px', color: '#595A5A', lineHeight: '2.5rem' }}>
            <span>Welcome to the micropayment liberation brought to you by <strong>TAPP (“Tapp And Privately Pay”)</strong></span>
          </h2>
          <p style={{ color: '#595A5A' }}>
            We are in private beta moving to public beta launch on <strong>31 March 2024!</strong>
          </p>
          <h1 style={{ marginBottom: '64px' }}>
            <span className="block todaq-charity__topline">
              <span>Join 100+ visionary companies on our waitlist.</span>
            </span>
          </h1>
          <p style={{ color: '#595A5A' }}>
            Join the waitlist by making a 25 cent micropayment and try TAPP for yourself.
          </p>
          <div>
            <ol style={{ color: '#595A5A' }}>
<li>Scroll down to the micro-paywall. TAPP the button!</li>
<li>Create and load your wallet with as little a $1 in under a minute.</li>
<li>Make a 25 cent micropayment to access the waitlist form</li>
<li>Fill out the form and hit submit.</li>
<li>Check your email for your micropayment receipt.</li>
<li>Mark your calendar for 31 March.</li>
<li>Access early preview news and our team will contact youi. Be a part of the group in the know.</li>
            </ol>
          </div>
          <p></p>
          <p><br /></p>
          <div style={{
            display: 'none', 
            alignItems: 'center',
            textAlign: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
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
          <h2 style={{ color: '#595A5A' }}><strong style={{ color: '#DE1A4F' }}>Why micropayments now?</strong></h2>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
            <div style={{ width: isMobile ? '100%' : '50%' }}>
              <ul style={{ color: '#595A5A', margin: 0 }}>
<li>Access the long tail of unserved customers that want to pay as they go.</li>
<li>Real-time one-tapp micropayments for digital content and services.</li>
<li>Revolutionary new micropay experiences include turning any user interface element into a micropay experience and AI conversational checkout.</li>
<li>Critical services like digital healthcare and education become affordable and accessible</li>
              </ul>
            </div>
            <div style={{ width: isMobile ? '100%' : '50%' }}>
              <ul style={{ color: '#595A5A', margin: 0 }}>
<li>Pay as you go for sports, media, publishing, streaming, music, games and more</li>
<li>No logins, subscriptions, or sharing of identity or account data.</li>
<li>Earn more revenue.</li>
<li>Instant checkout reduces abandonment</li>
<li>Reduce cash cycle to seconds with instant distributions.</li>
<li>Remove payment and back-office costs.</li>
<li>Automated, portable, verifiable records.</li>
<li>Fast, simple, low code implementation</li>
              </ul>
            </div>
          </div>

          <div style={{ position: 'relative', marginTop: '64px', display: 'flex', justifyContent: 'center', border: '2px solid grey', paddingTop: '64px' }}>
            <div className="todaq-charity__tile" style={{ display: success ? 'none' : 'flex' }}>
              <div>
                <h2>Join the waitlist</h2>
                <p>Make a micropayment to join the waitlist!</p>
              </div>
              <div className="todaq-charity__micropay" dangerouslySetInnerHTML={{
                __html: `
    <script type="text/javascript" id="_TODAQMicroFrame-adedc7a6-3a65-453a-a1a2-0f83a3e8da1a">
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
      o.src = "https://pay.m.todaq.net/v2/embed/adedc7a6-3a65-453a-a1a2-0f83a3e8da1a",
      n = document.getElementById("_TODAQMicroFrame-adedc7a6-3a65-453a-a1a2-0f83a3e8da1a"),
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
            document.dispatchEvent(new CustomEvent("purchase", { detail: 'adedc7a6-3a65-453a-a1a2-0f83a3e8da1a' }));
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
              <fieldset className="todaq-charity__modal-fieldset">
                <legend className="todaq-charity__modal-legend">
                  What micropayment use case are you most excited about?
                </legend>
                <div className="todaq-charity__modal-field">
                  <textarea className="todaq-charity__modal-input" ref={useCaseRef} disabled={!success || loading} />
                </div>
              </fieldset>
              <div className="todaq-charity__modal-submit-wrapper">
                <button className={!submitted ? 'toda-charity__modal-submit' : 'todaq-charity__modal-submit success'} type="submit" onClick={async (e) => {
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
                        useCase: useCaseRef.current?.value,
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
                    useCaseRef.current!.value = '';

                    setSubmitted(true);

                    setTimeout(() => {
                      setSubmitted(false);
                      setSuccess(false);
                    }, 2500);
                  } else {
                    console.error('ERROR', response.status);
                  }
                }}>
                  {!submitted
                    ? !loading
                        ? <span>Submit</span>
                        : <span className="spinner"></span>
                    : <span>Success</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
