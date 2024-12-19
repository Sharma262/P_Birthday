import "./Gift.css";
import { useNavigate } from "react-router-dom";

const Gift = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/Main`);
  };
  return (
    <div className="container">
      <div className="birthdayCard">
        <div className="cardFront">
          <h3 className="happy">HAPPY BIRTHDAY PRITY!</h3>
          <div className="balloons">
            <div className="balloonOne" />
            <div className="balloonTwo" />
            <div className="balloonThree" />
            <div className="balloonFour" />
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">HAPPY BIRTHDAY DUDE!</h3>
          <p>Dear Friend,</p>
          <p>
            Happy birthday!! I hope your day is filled with lots of love and
            laughter! May all of your birthday wishes come true.
          </p>
          <button onClick={handleNavigate}>Click me</button>
        </div>
      </div>
    </div>
  );
};

export default Gift;
 