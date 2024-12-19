import './MainCard.css'
import pri from '../images/pritty.jpeg'
import { useNavigate } from 'react-router-dom';

const MainCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    let a = prompt('Please enter apna secret code')
    console.log(a)
    if(a == 'bahen' || 'mt15'){
      navigate('secret-msg')
    }
  }

  return (
    <>
      <div className="header">
        <h1>TODAY IS PRITY'S BIRTHDAY</h1>
        <img src={pri} alt="Group pic" className="bf-foto" />
        <h2 id="bday-age">25 years old</h2>
        <br />
        <h4 id="bday-date">09.01.1999 </h4>
      </div>

      <div className="gift-section-wrapper">
        <div className="gift-section">
          <h2 className="gift-title">Here's some fighting scene 🥳</h2>
          <h3 className="gift-hint">(Hover over the gift)</h3>
          <div className="gift-image gift-img-happy"></div>
        </div>

        <div className="gift-section">
          <h2 className="gift-title">These are the people you earned from you smile 😍</h2>
          <h3 className="gift-hint">(Hover over the gift)</h3>
          <div className="gift-image gift-img-hot"></div>
        </div>

        <div className="gift-section">
          <h2 className="gift-title">Your most beautyfull pic ever😍</h2>
          <h3 className="gift-hint">(Hover over the gift)</h3>
          <div className="gift-image gift-img-genius"></div>
        </div>

        <div className="gift-section">
          <h2 className="gift-title">Remember this??? 👇 </h2>
          <h3 className="gift-hint">(Hover over the gift)</h3>
          <div className="gift-image gift-img-badasss"></div>
        </div>

        <div className="gift-section">
          <h2 className="gift-title">Kinder Joy Memories.. 🥂</h2>
          <h3 className="gift-hint">(Hover over the gift)</h3>
          <div className="gift-image gift-img-cheers"></div>
        </div>
      </div>

      <button onClick={handleClick} >Click here for a special message</button>
    </>
  );
};


export default MainCard;