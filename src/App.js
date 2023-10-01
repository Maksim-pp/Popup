import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { maxLengthCreator } from './validators/validators';

function App() {
  const [show, setShow] = useState(false)
  const ShowPopup = () => {
    setShow(true)
  }
  const Close = () => {
    setShow(false)
  }
  const MaxLength = maxLengthCreator(360)

  const MAX_TEXT_LENGTH = 360;
  const [text, setText] = useState('');

  function handleTextAreaChange(event) {
    const value = event.target.value;
    if (value.length <= MAX_TEXT_LENGTH) {
      setText(value);
    }
  }

  
  return (
    <div className="App">
      <div class="wrapper">
        <button class="btn red" onClick={ShowPopup}>Мы</button>
        <button class="btn green" onClick={ShowPopup}>Кнопки</button>
        <button class="btn blue" onClick={ShowPopup}>Вызывающие</button>
        <button class="btn black" onClick={ShowPopup}>Попап</button>
      </div>
      {show &&
      <div class="popup">
        <div class="overlay"></div>
        
        <form action="">
          <button class='close' onClick={Close}>&#10006;</button>
          <h3>Мы вам перезвоним</h3>
          <div class="input_group">
            <input name="name" type="text" placeholder="Имя" required/>
            <label for="name">Имя</label>
          </div>
          <div class="input_group">
            <input name="surname" type="text" placeholder="Фамилия" required/>
            <label for="surname">Фамилия</label>
          </div>
          <div class="input_group">
            <textarea name="comment" id="comment" maxlength="360" placeholder="Оставьте комментарий" required validate={[MaxLength]}onChange={handleTextAreaChange}></textarea>
            <label for="comment">Оставьте комментарий</label>
            <div class="textarea_counter" id="textarea_counter">{`${text.length}/${MAX_TEXT_LENGTH}`}</div>
          </div>
          <div class="input_group">
            <input name="checkbox" type="checkbox" required className='checkbox'/>
            <label for="checkbox">Согласие на обработку персональных <br/>данных </label>
          </div>
          <input class="btn" type="submit" value="Оставить заявку"/>
        </form>
      </div>
      }
  </div>
  );
}

export default App;
