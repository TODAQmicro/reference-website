import {useRef} from "react";
import Logo from "../SVG/Logo";

interface Props {
  onClose: () => void
}

export default function WaitlistModal({ onClose }: Props) {
  const ref = useRef(null);

  return (
    <div ref={ref} className="todaq-charity__modal-background" onClick={(e) => {
      e.preventDefault();

      if (e.target === ref?.current) {
        onClose();
      }
    }}>
      <form className="modal todaq-charity__modal">
        <Logo />
        <fieldset className="todaq-charity__modal-fieldset">
          <div className="todaq-charity__modal-field">
            <legend className="todaq-charity__modal-legend">
              Company Name
            </legend>
            <input className="todaq-charity__modal-input" type="text" placeholder="ACME Inc." />
          </div>
        </fieldset>
        <fieldset className="todaq-charity__modal-fieldset">
          <div className="todaq-charity__modal-field">
            <legend className="todaq-charity__modal-legend">
              Your Name
            </legend>
            <input className="todaq-charity__modal-input" type="text" placeholder="John Doe" />
          </div>
        </fieldset>
        <fieldset className="todaq-charity__modal-fieldset">
          <div className="todaq-charity__modal-field">
            <legend className="todaq-charity__modal-legend">
              Role
            </legend>
            <input className="todaq-charity__modal-input" type="text" placeholder="Chief Product Officer" />
          </div>
        </fieldset>
        <fieldset className="todaq-charity__modal-fieldset">
          <div className="todaq-charity__modal-field">
            <legend className="todaq-charity__modal-legend">
              Email
            </legend>
            <input className="todaq-charity__modal-input" type="text" placeholder="john@acme.inc" />
          </div>
        </fieldset>
        <div className="todaq-charity__modal-submit-wrapper">
          <button className="toda-charity__modal-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
