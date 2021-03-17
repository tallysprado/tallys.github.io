import Typing from "react-typing-animation";
import DownButton from "../../components/DownButton"

export default function Landing() {
  return (
    <>
      <div id="landing">
        <div className="bg">
          <div className="block">
            <div className="hello">
              <h1>OLÁ</h1>
              <h1>MUNDO</h1>
            </div>

            <div
              className="divider"
            />

            <div className='slide'>
              <h1>Bem vindo</h1>
              <h1>à minha página.</h1>
            </div>
          </div>
          <div className="typewriter">
            <h1 id="text">
              Meu nome é Tallys.
              <br />
            </h1>
          </div>

            <DownButton/>

        </div>
      </div>
    </>
  );
}
