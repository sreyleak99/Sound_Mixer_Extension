import '../styles/SoundMixer.css'
import { useState } from 'react'



function App() {
  const [pitch, setPitch] = useState(false);
  const [chorus, setChorus] = useState(false);
  const [reverb, setReverb] = useState(false);
  const [equalizer, setEqualizer] = useState(false);
  const [limiter, setLimiter] = useState(false);
  const [highcut, setHighcut] = useState(50);
  const [lowcut, setLowcut] = useState(50);
  const [dry, setDry] = useState(50);
  const [wet, setWet] = useState(50);

  const handleCheckboxChange = (event: { target: { id: any; checked: any; }; }) => {
    const { id, checked } = event.target;
    switch (id) {
      case 'pitch':
        setPitch(checked);
        break;
      case 'chorus':
        setChorus(checked);
        break;
      case 'reverb':
        setReverb(checked);
        break;
      case 'equalizer':
        setEqualizer(checked);
        break;
      case 'limiter':
        setLimiter(checked);
        break;
      default:
        break;
    }
  };

  const handleSliderChange = (event: { target: { id: any; value: any; }; }) => {
    const { id, value } = event.target;
    switch (id) {
      case 'highcut':
        setHighcut(value);
        break;
      case 'lowcut':
        setLowcut(value);
        break;
      case 'dry':
        setDry(value);
        break;
      case 'wet':
        setWet(value);
        break;
      default:
        break;
    }
  };

  const handleBypassClick = () => {
    // Logic to bypass effects
    setPitch(false);
    setChorus(false);
    setReverb(false);
    setEqualizer(false);
    setLimiter(false);
    setHighcut(50);
    setLowcut(50);
    setDry(50);
    setWet(50);
  };
  
  const handleResetClick = () => {
    // Logic to reset all settings
    setPitch(false);
    setChorus(false);
    setReverb(false);
    setEqualizer(false);
    setLimiter(false);
    setHighcut(50);
    setLowcut(50);
    setDry(50);
    setWet(50);
  };
  
  const handleSaveClick = () => {
    // Logic to save preset
    alert("Preset saved!");
  };
  

  return (
    <div className="container">
      <div className="background"></div>
      <div className="content">
        <div className="options">
          <label>
            <input type="checkbox" id="pitch" checked={pitch} onChange={handleCheckboxChange} />
            Pitch
          </label>
          <label>
            <input type="checkbox" id="chorus" checked={chorus} onChange={handleCheckboxChange} />
            Chorus
          </label>
          <label>
            <input type="checkbox" id="reverb" checked={reverb} onChange={handleCheckboxChange} />
            Reverb
          </label>
          <label>
            <input type="checkbox" id="equalizer" checked={equalizer} onChange={handleCheckboxChange} />
            Equalizer
          </label>
          <label>
            <input type="checkbox" id="limiter" checked={limiter} onChange={handleCheckboxChange} />
            Limiter
          </label>
        </div>

        <div className="mixer">
          <label htmlFor="highcut">Highcut:</label>
          <input
            type="range"
            min="0"
            max="100"
            value={highcut}
            className="slider vertical"
            id="highcut"
            onChange={handleSliderChange}
          />
          <label htmlFor="lowcut">Lowcut:</label>
          <input
            type="range"
            min="0"
            max="100"
            value={lowcut}
            className="slider vertical"
            id="lowcut"
            onChange={handleSliderChange}
          />
          <label htmlFor="dry">Dry:</label>
          <input
            type="range"
            min="0"
            max="100"
            value={dry}
            className="slider vertical"
            id="dry"
            onChange={handleSliderChange}
          />
          <label htmlFor="wet">Wet:</label>
          <input
            type="range"
            min="0"
            max="100"
            value={wet}
            className="slider vertical"
            id="wet"
            onChange={handleSliderChange}
          />
        </div>

        <div className="buttons">
          <button onClick={handleBypassClick}>Bypass</button>
          <button onClick={handleResetClick}>Reset</button>
          <button onClick={handleSaveClick}>Save Preset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
