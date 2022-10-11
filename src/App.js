import React from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';

import './App.css';

class MainApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '15', checkbox: true };
    this.myRangeChange = this.myRangeChange.bind(this);
    this.defualtPassword = this.create_password(15, ['u', 'l', 'n', 's']);
    this.checkPasswordSetting = this.checkPasswordSetting.bind(this);
    this.regenPasswordClick = this.regenPasswordClick.bind(this);
  }

  create_password(length, char) {
    var result = '';
    var characters = '';
    if (char.includes('u')) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (char.includes('l')) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (char.includes('n')) {
      characters += '0123456789';
    }
    if (char.includes('s')) {
      characters += '~!@#£€$¢¥§%°^&*()-_+={}[]|/:;<>,.?';
    }
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  checkPasswordSetting() {
    var pw_arr = [];
    if (document.querySelectorAll('.customize-checkbox:checked').length == 0) {
      document.querySelectorAll('.customize-checkbox')[0].checked = true;
    }
    document.querySelectorAll('.customize-checkbox:checked').forEach((checkbox,) => {
      pw_arr.push(checkbox.value);
    });
    return pw_arr;
  }

  myRangeChange(event) {
    this.setState({ value: event.target.value });
    document.getElementById("password-text").value = this.create_password(event.target.value, this.checkPasswordSetting());
  }

  regenPasswordClick() {
    document.getElementById("password-text").value = this.create_password(document.getElementById("myRange").value, this.checkPasswordSetting());
  }

  copyPasswordClick() {
    var copyText = document.getElementById("password-text");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    document.querySelector('.app').insertAdjacentHTML('afterend', '<div class="notify-warpper"> <div class="notify-content"> คัดลอกรหัสผ่านสำเร็จ </div> </div>');
  }

  openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }

  closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }

  render() {
    return (
      <div className="app" id="app">
        <div className="section">
          <div className="row navigation-menu align-items-center">
            <div className="menu-col-left">
              <div className="logo-warp">
                <a href="https://8content.com" target="_blank">
                  <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100" x="0px" y="0px" viewBox="0 0 422.04 208.34" overflow="visible" xmlSpace="preserve" > <g> <g> <g> <path fill="#303B97" d="M381.86,111.47c0.08-0.7,0.15-1.41,0.21-2.12c-0.02,0.08-0.03,0.15-0.04,0.23 C381.99,110.21,381.93,110.84,381.86,111.47z" /> <path fill="#303B97" d="M382.26,104.74c0-0.67-0.01-1.34-0.03-2.01c0,1.21,0,2.41,0,3.62 C382.25,105.82,382.26,105.28,382.26,104.74z" /> <path fill="#303B97" d="M381.23,94.77c0.37,2.29,0.65,4.59,0.97,6.89c-0.61-13.09-5.51-25.15-13.33-34.84 c0.31,0.4,0.61,0.79,0.91,1.19C375.72,76.03,379.63,84.91,381.23,94.77z" /> <path fill="#303B97" d="M367.84,187.12c7.65-4.31,14.62-9.6,20.76-15.89c7.4-7.59,13.46-16.13,18.05-25.74 c5.2-10.89,8.12-22.32,9.02-34.31c0.03-0.42,0.2-0.83,0.31-1.24c0-3.45,0-6.89,0-10.34c-0.5-3.61-0.93-7.24-1.52-10.84 c-2.42-14.93-8.35-28.38-17.33-40.51c-10.18-13.74-23.23-23.97-38.91-30.58c-17.04-7.19-34.8-9.05-53.14-6.09 c-16.27,2.62-31.69,7.76-46.69,14.42c-17.42,7.73-33.93,17.08-49.7,27.72c-9.62,6.49-19.11,13.18-28.34,20.22 c-8.54,6.51-16.71,13.53-24.92,20.46c-2.71,2.29-5.11,4.96-7.55,7.57c-0.7,0.75-1,1.86-1.49,2.81c0,0.57,0,1.15,0,1.72 c2.63,5.52,7.55,8.91,12.08,12.55c10.62,8.52,21.27,17.02,32.22,25.1c13.67,10.1,28.04,19.15,42.96,27.33 c14.43,7.91,29.27,14.86,44.9,20.06c13.75,4.58,27.85,7.66,42.37,7.77C337.56,199.44,353.28,195.31,367.84,187.12z M291.45,162.66c-10.32-3.44-20.13-8.03-29.66-13.25c-9.85-5.4-19.34-11.39-28.37-18.05c-7.23-5.34-14.27-10.95-21.28-16.58 c-2.99-2.4-6.24-4.64-7.98-8.29c0-0.38,0-0.76,0-1.14c0.32-0.62,0.52-1.36,0.98-1.85c1.61-1.72,3.19-3.49,4.98-5 c5.43-4.58,10.82-9.21,16.46-13.51c6.09-4.64,12.37-9.07,18.72-13.35c10.42-7.03,21.33-13.2,32.83-18.31 c9.91-4.4,20.1-7.79,30.84-9.53c12.11-1.95,23.84-0.72,35.1,4.03c9.9,4.17,18.2,10.53,24.79,19 c7.82,9.68,12.71,21.75,13.33,34.84c0.01,0.09,0.02,0.18,0.04,0.27c0,0.27,0,0.53,0,0.8c0.02,0.67,0.03,1.34,0.03,2.01 c0,0.54-0.01,1.07-0.03,1.61c0,0.8,0,1.61,0,2.41c-0.05,0.2-0.12,0.39-0.16,0.59c-0.06,0.71-0.13,1.42-0.21,2.12 c-0.75,7.23-2.63,14.16-5.79,20.78c-3.03,6.35-7.03,11.99-11.92,17c-4.05,4.16-8.66,7.65-13.71,10.49c-9.61,5.41-20,8.14-31,8.05 C309.85,167.71,300.53,165.68,291.45,162.66z" /> <path fill="#303B97" d="M382.24,101.93c-0.01-0.09-0.02-0.18-0.04-0.27c0.02,0.36,0.03,0.71,0.04,1.07 C382.24,102.47,382.24,102.2,382.24,101.93z" /> <path fill="#303B97" d="M382.24,108.76c0-0.8,0-1.61,0-2.41c-0.03,1.01-0.09,2.01-0.16,3 C382.11,109.15,382.19,108.96,382.24,108.76z" /> </g> <g> <path fill="#FEBF12" d="M40.09,99.7c-0.08,0.7-0.15,1.41-0.21,2.12c0.02-0.08,0.03-0.15,0.04-0.23 C39.97,100.96,40.03,100.33,40.09,99.7z" /> <path fill="#FEBF12" d="M39.69,106.42c0,0.67,0.01,1.34,0.03,2.01c0-1.21,0-2.41,0-3.62C39.7,105.35,39.69,105.89,39.69,106.42z" /> <path fill="#FEBF12" d="M40.72,116.39c-0.37-2.29-0.65-4.59-0.97-6.89c0.61,13.09,5.51,25.15,13.33,34.84 c-0.31-0.4-0.61-0.79-0.91-1.19C46.24,135.14,42.32,126.26,40.72,116.39z" /> <path fill="#FEBF12" d="M54.12,24.05c-7.65,4.31-14.62,9.6-20.76,15.89c-7.4,7.59-13.46,16.13-18.05,25.74 C10.11,76.56,7.19,88,6.29,99.99c-0.03,0.42-0.2,0.83-0.31,1.24c0,3.45,0,6.89,0,10.34c0.5,3.61,0.93,7.24,1.52,10.84 c2.42,14.93,8.35,28.38,17.33,40.51c10.18,13.74,23.23,23.97,38.91,30.58c17.04,7.18,34.8,9.05,53.14,6.09 c16.27-2.62,31.69-7.76,46.69-14.42c17.42-7.73,33.93-17.08,49.7-27.72c9.62-6.49,19.11-13.18,28.34-20.21 c8.54-6.51,16.71-13.53,24.92-20.46c2.71-2.29,5.11-4.96,7.55-7.57c0.7-0.75,1-1.86,1.49-2.81c0-0.57,0-1.15,0-1.72 c-2.63-5.52-7.55-8.91-12.08-12.55c-10.62-8.52-21.27-17.02-32.22-25.1c-13.67-10.1-28.04-19.15-42.96-27.33 c-14.43-7.91-29.27-14.86-44.9-20.06c-13.75-4.58-27.85-7.66-42.37-7.77C84.4,11.72,68.67,15.85,54.12,24.05z M130.51,48.51 c10.32,3.44,20.13,8.03,29.66,13.25c9.85,5.4,19.34,11.39,28.37,18.05c7.23,5.34,14.27,10.95,21.28,16.58 c2.99,2.4,6.24,4.64,7.98,8.29c0,0.38,0,0.76,0,1.14c-0.32,0.62-0.52,1.36-0.98,1.85c-1.61,1.72-3.19,3.49-4.98,5 c-5.43,4.58-10.82,9.21-16.46,13.51c-6.09,4.64-12.37,9.07-18.72,13.35c-10.42,7.03-21.33,13.2-32.83,18.31 c-9.91,4.4-20.1,7.79-30.84,9.53c-12.11,1.95-23.84,0.72-35.1-4.03c-9.9-4.17-18.2-10.53-24.79-19 c-7.82-9.68-12.71-21.75-13.33-34.84c-0.01-0.09-0.02-0.18-0.04-0.27c0-0.27,0-0.53,0-0.8c-0.02-0.67-0.03-1.34-0.03-2.01 c0-0.54,0.01-1.07,0.03-1.61c0-0.8,0-1.61,0-2.41c0.05-0.2,0.12-0.39,0.16-0.59c0.06-0.71,0.13-1.42,0.21-2.12 c0.75-7.23,2.63-14.16,5.79-20.78c3.03-6.35,7.03-11.99,11.92-17c4.05-4.16,8.66-7.65,13.71-10.49c9.61-5.41,20-8.14,31-8.05 C112.11,43.45,121.42,45.48,130.51,48.51z" /> <path fill="#FEBF12" d="M39.72,109.23c0.01,0.09,0.02,0.18,0.04,0.27c-0.02-0.36-0.03-0.71-0.04-1.07 C39.72,108.7,39.72,108.97,39.72,109.23z" /> <path fill="#FEBF12" d="M39.72,102.41c0,0.8,0,1.61,0,2.41c0.03-1.01,0.09-2.01,0.16-3C39.84,102.01,39.77,102.21,39.72,102.41z" /> </g> </g> <path fill="#303B97" d="M180.34,73.94c-0.02,0.02-0.04,0.04-0.07,0.05c2.79,1.88,5.55,3.82,8.26,5.82 c7.23,5.34,14.27,10.95,21.28,16.58c0.48,0.38,0.96,0.76,1.44,1.14c5.04-4.26,10.08-8.55,15.33-12.56 c4.76-3.62,9.62-7.11,14.55-10.51c-3.27-2.51-6.55-5.01-9.86-7.45c-6.83-5.04-13.83-9.82-20.98-14.37 c-0.54,0.36-1.08,0.71-1.62,1.07C199.06,60.21,189.56,66.91,180.34,73.94z" /> <polygon fill="#303B97" points="179.6,74.51 211.04,52.15 242.47,72.64 241.14,74.48 208.79,99.7 	" /> </g> </svg>
                </a>
              </div>
            </div>
            <div className="menu-col-right d-flex justify-content-end">
              <span onClick={this.openNav} style={{ cursor: "pointer" }}><MenuRoundedIcon /></span>
            </div>
          </div>
        </div>
        <div className="section main-section">
          <div className="row main-content">
            <div className="col-12">
              <h1 className="text-center mb-0 main-h1-title">สร้างรหัสผ่านปลอดภัย สุ่มรหัสผ่านออนไลน์</h1>
              <p className="text-center" style={{ marginTop: "0.25 em", marginBottom: "2.25em" }}>สร้างรหัสผ่านแบบปลอดภัย รหัสผ่านแบบยาก สุ่มรหัสผ่าน สุ่มรหัสผ่านออนไลน์</p>
              <div className="form-group form-group-2-col row align-items-center">
                <div className="col-8">
                  <input type="text" className="form-control" id="password-text" defaultValue={this.defualtPassword} />
                </div>
                <div className="col-4 d-flex justify-content-end gap-1 justify-content-mb-center">
                  <button className="btn btn-w-icon" id="copy-password" onClick={this.copyPasswordClick}>
                    <ContentCopyRoundedIcon />
                    <span className="show-mb">คัดลอก</span>
                  </button>
                  <button className="btn btn-w-icon" id="regen-password" onClick={this.regenPasswordClick}>
                    <CachedRoundedIcon />
                    <span className="show-mb">สร้างใหม่</span>
                  </button>
                </div>
              </div>
              <div className="form-group form-group-2-col row align-items-center mt-2" style={{ background: "#fff" }}>
                <div className="col-6 col-mob-no-change">
                  <h4 className="">ความยาวของรหัสผ่าน</h4>
                </div>
                <div className="col-6 d-flex justify-content-end gap-1 col-mob-no-change">
                  <h4 className=""><span id="demo">{this.state.value}</span> ตัวอักษร</h4>
                </div>
                <div className="col-12">
                  <input type="range" min="1" max="30" className="slider" id="myRange" value={this.state.value} onInput={this.myRangeChange} />
                </div>
                <div className="row mt-4 checkbox-group" style={{ width: "100%", marginTop: "2em" }}>
                  <div className="col-3 col-mb-6">
                    <label className="container"> Uppercase
                      <input type="checkbox" id="uppercase" className="customize-checkbox" defaultChecked={this.state.checkbox} defaultValue="u" onClick={this.regenPasswordClick} />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-3 col-mb-6">
                    <label className="container"> Lowercase
                      <input type="checkbox" id="lowercase" className="customize-checkbox" defaultChecked={this.state.checkbox} defaultValue="l" onClick={this.regenPasswordClick} />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-3 col-mb-6">
                    <label className="container"> Numbers
                      <input type="checkbox" id="numbers" className="customize-checkbox" defaultChecked={this.state.checkbox} defaultValue="n" onClick={this.regenPasswordClick} />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-3 col-mb-6">
                    <label className="container"> Symbols
                      <input type="checkbox" id="symbols" className="customize-checkbox" defaultChecked={this.state.checkbox} defaultValue="s" onClick={this.regenPasswordClick} />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">

            </div>
          </div>
        </div>
        <div id="mySidenav" className="sidenav" style={{ display: "none" }}>
          <button className="close" onClick={this.closeNav}>×</button>
          <ul className="menu-list">
            <li><a href="https://8content.com/">หน้าหลัก</a></li>
            <li><a href="https://8content.com/%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b8%97%e0%b8%b3%e0%b9%80%e0%b8%a7%e0%b9%87%e0%b8%9a%e0%b9%84%e0%b8%8b%e0%b8%95%e0%b9%8c-2/">เกี่ยวกับเรา</a></li>
            <li><a href="https://8content.com/services/">บริการของเรา</a>
              <ul className="sub-menu-list">
                <li><a href="https://8content.com/services/website-development/">บริการทำเว็บไซต์</a></li>
                <li><a href="https://8content.com/services/google-adwords/">โฆษณา Google Adwords</a></li>
                <li><a href="https://8content.com/services/facebook-advertising/">ดูแลเพจ Facebook Page</a></li>
              </ul>
            </li>
            <li><a href="https://8content.com/blog/">บทความ</a></li>
            <li><a href="https://8content.com/%e0%b8%95%e0%b8%b4%e0%b8%94%e0%b8%95%e0%b9%88%e0%b8%ad%e0%b9%80%e0%b8%a3%e0%b8%b2/">ติดต่อเรา</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./serviceWorker.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

export default MainApp;