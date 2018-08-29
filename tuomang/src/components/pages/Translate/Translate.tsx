import * as React from 'react';
import "roboto-fontface";
import "./Translate.css"
import {
  Title,
  Topbar
} from '../../Components';

const readTxt = () => {

  const fileText: string = "cat";

  return (
    <div>
      <input id="uploadText" type="file" accept=".txt" />
      <textarea>
        {fileText}
      </textarea>
    </div>
  );
}

const translateBox1 = () => {
  return (
    <div className="translateBox" id="col1" >
      <div>
        <h2>
          阅读 Reading
        </h2>
        <ul id="readOptions" >
          <li>
            Paste/Write
          </li>
          <li>
            Import File
          </li>
          <li>
            Saved Texts
          </li>
          <li>
            Popular
          </li>
          <li>
            Books
          </li>
          <li>
            TV Shows/Movies
          </li>
          <li>
            Other
          </li>
        </ul>
      </div>
    </div>
  );
}

const translateBox2 = () => {
  return (
    <div className="translateBox" id="col2" >
      <div>
        <div id="col2Wrapper" >
          <h2>
            译文 Translate
          </h2>
          <p id="zhSentence" >
            你好。
          </p>
          <p id="pinyin" >
            Nǐ hǎo.
          </p>
          <form>
            <label>
              Enter your translation
            </label>
            <br />
            <input type="text" className="textInput" />
          </form>
        </div>
      </div>
    </div>
  );
}

const translateBox3 = () => {
  return (
    <div className="translateBox" id="col3" >
      <div>
        <h2>
          原文 Current Text
        </h2>
        <div>
          {readTxt()}
        </div>
      </div>
    </div>
  );
}

const translateTable = () => {
  return (
    <div className="translateTable" >
      {translateBox1()}
      {translateBox2()}
      {translateBox3()}
    </div>
  );
}

class Translate extends React.Component {
  public render() {
    return (
      <div className="translateWrapper">
        <div className="backgroundHeader">
          <Title />
          <div>
            <Topbar />
          </div>
        </div>
        <section>
          {translateTable()}
        </section>
      </div>
    );
  }
}

export default Translate;