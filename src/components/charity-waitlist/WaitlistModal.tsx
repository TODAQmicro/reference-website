import {useRef, useState} from "react";
import Logo from "../SVG/Logo";

interface Props {
  onClose: () => void
}

export function WaitlistSuccess() {
  return (
    <fieldset className="todaq-charity__modal-fieldset">
      <div className="todaq-charity__modal-field">
        <p>Congratulations! You've been added to the waitlist.</p>
      </div>
    </fieldset>
  );
}

export function WaitlistFailure({ error }: { error: string }) {
  return (
    <fieldset className="todaq-charity__modal-fieldset">
      <div className="todaq-charity__modal-field">
        <p>Uh oh! Something has gone wrong: {error}.</p>
      </div>
    </fieldset>
  );
}

export default function WaitlistModal({ onClose }: Props) {
  const companyRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const backdropRef = useRef(null);

  const [ success, setSuccess ] = useState(false);
  const [ failure, setFailure ] = useState('');
  const [ loading, setLoading ] = useState(false);

  return (
    <div ref={backdropRef} className="todaq-charity__modal-background" onClick={(e) => {
      e.preventDefault();

      if (e.target === backdropRef?.current && !loading) {
        onClose();
      }
    }}>
      <form className="modal todaq-charity__modal">
        <Logo />
        {success || failure
          ? success && !failure
            ? <WaitlistSuccess />
            : <WaitlistFailure error={failure} />
          : (
            <div>
              <fieldset className="todaq-charity__modal-fieldset">
                <div className="todaq-charity__modal-field">
                  <legend className="todaq-charity__modal-legend">
                    Company Name
                  </legend>
                  <input className="todaq-charity__modal-input" ref={companyRef} type="text" placeholder="ACME Inc." />
                </div>
              </fieldset>
              <fieldset className="todaq-charity__modal-fieldset">
                <div className="todaq-charity__modal-field">
                  <legend className="todaq-charity__modal-legend">
                    Your Name
                  </legend>
                  <input className="todaq-charity__modal-input" ref={nameRef} type="text" placeholder="John Doe" />
                </div>
              </fieldset>
              <fieldset className="todaq-charity__modal-fieldset">
                <div className="todaq-charity__modal-field">
                  <legend className="todaq-charity__modal-legend">
                    Role
                  </legend>
                  <input className="todaq-charity__modal-input" ref={roleRef} type="text" placeholder="Chief Product Officer" />
                </div>
              </fieldset>
              <fieldset className="todaq-charity__modal-fieldset">
                <div className="todaq-charity__modal-field">
                  <legend className="todaq-charity__modal-legend">
                    Email
                  </legend>
                  <input className="todaq-charity__modal-input" ref={emailRef} type="text" placeholder="john@acme.inc" />
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
                        name: nameRef.current?.value,
                        role: roleRef.current?.value,
                        email: emailRef.current?.value,
                      })
                    },
                  );

                  setLoading(false);

                  if (response.ok) {
                    setSuccess(true);
                  } else {
                    setFailure(await response.text());
                  }
                }}>
                  Submit
                </button>
              </div>
            </div>
          )
        }
      </form>
    </div>
  );
}
