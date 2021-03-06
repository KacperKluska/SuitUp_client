import { useState } from 'react';
import './style.scss';

const EmailButton = () => {
  const [buttonState, setButtonState] = useState(true);
  const [activeClass, setActiveClass] = useState('');

  const handleClick = () => {
    setButtonState((prev) => !prev);
    if (activeClass === '') {
      setActiveClass('active');
      setTimeout(() => {
        setActiveClass('');
      }, 500);
    }
  };

  return (
    <div className="fixedToRight">
      {!buttonState && (
        <form className={`emailForm ${activeClass}`}>
          <div className="navigation">
            Write email to us!
            <button type="button" onClick={handleClick}>
              <i className="icon-cancel" />
            </button>
          </div>
          <input className="emailHelpInput" placeholder="Full name" required />
          <input
            className="emailHelpInput"
            placeholder="Your email"
            type="email"
            required
          />
          <textarea
            className="emailHelpInput emailHelpTextarea"
            placeholder="Type here..."
            required
          />
          <button type="button" className="emailFormButton">
            Send
          </button>
        </form>
      )}
      {buttonState && (
        <button type="button" className="emailButton" onClick={handleClick}>
          <i className="icon-mail" />
        </button>
      )}
    </div>
  );
};

export default EmailButton;
