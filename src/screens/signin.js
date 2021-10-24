import React, { useState, useEffect } from 'react';
import countriesList from '../const/countries';
import Cover from '../const/cover'
import zuz from '../zuz/functions'
import Loading from '../const/loding';
import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase';


function Signin(props) {

    const [dialCode, setdialCode] = useState("+91");
    const [phone, setPhone] = useState(null);
    const [phonenumber, setPhoneNumber] = useState("8827040821");
    const [verificationcode, setVerificationCode] = useState(null);
    const [loading, setloading] = useState(false);
    const [mode, setMode] = useState("sendcode");
    const [confirmationResult, setconfirmationResult] = useState(null);


    useEffect(() => {
        if (!window.recaptchaverifier) {
            window.recaptchaverifier = new global.firebase.auth.RecaptchaVerifier('__phonesignere__');
            window.recaptchaverifier.render().then(wid => {
                window.widgetID = wid;
            });
        }
    });

    const signin = () => {
        if (phone == null) {
            zuz.Toast.show({ html: "Enter Your Number", time: 6 })
        } else {
            setloading(true);
            zuz.Toast._dismissAll();
            var appVerifier = window.recaptchaverifier, phonenumber = dialCode + phone;
            global.firebase.auth().signInWithPhoneNumber(phonenumber, appVerifier).then(result => {
                setconfirmationResult(result);
                setVerificationCode(null);
                setMode("verifycode");
                setloading(false);
            }).catch(err => {
                console.log(err);
                if (err.code == 'auth/invalid-phone-number') {
                    zuz.Toast.show({ html: "Enter Valid Phone Number", time: 5 });
                } else if (err.code == 'auth/captcha-check-failed') {
                    zuz.Toast.show({ html: "Verify if you are a human!", time: 5 });
                } else {
                    zuz.Toast.show({ html: "Unable to Process", time: 5 });
                }
            })
        }
    }

    const verifycode = () => {
        setloading(true);
        zuz.Toast._dismissAll();
        confirmationResult.confirm(verificationcode)
            .then(result => {
                global.firebase.auth().currentUser.getIdToken()
                    .then(token => {

                    })

            }).catch(err => {
                console.log(err);
                zuz.Toast.show({ html: "Invalid confirmation code...", time: 5 });
            })

    }

    const sendCodeView = () => {
        return (
            <div className="account rel">
                {loading && <Cover />}
                <img src="http://localhost:3000/ui/logo192.png" className="logo" />
                <h2 className="s50 fontl title c333">Sign in</h2>
                <select
                    className="iput s15 fontn c333"
                    defaultValue={dialCode}
                    onChange={e => { setdialCode(e.target.value) }}>
                    <option value="-1">Select Country</option>
                    {
                        countriesList.map(e => {
                            return (<option
                                value={e.dial_code}>{e.name} ({e.dial_code})
                            </option>)
                        })
                    }
                </select>
                <input
                    type="text"
                    className="iput s15 fontn c333"
                    value={phone}
                    onChange={e => { setPhone(e.target.value == "" ? null : e.target.value) }}
                    placeholder="1234 123 1234" />
                <div className="recaptcha" id="__phonesignere__"></div>
                <button onClick={e => { signin() }} className="continue s15 fontn cfff">Continue</button>
            </div>
        )
    }

    const verifyCodeView = () => {
        return (
            <div className="account rel">
                {loading && <Cover />}
                <img src="http://localhost:3000/ui/logo192.png" className="logo" />
                <h2 className="s24 fontn title c333">Verify Number</h2>
                <h2 className="s16 fontn title c333">Enter verification code sent to {dialCode + phonenumber}</h2>
                <input
                    type="text"
                    className="iput s15 fontn c333"
                    value={verificationcode}
                    onChange={e => { setVerificationCode(e.target.value == "" ? null : e.target.value) }}
                    placeholder="xxxxxx" />
                <button onClick={e => { verifycode() }} className="continue s15 fontn cfff">Continue</button>
            </div>
        )
    }

    return (
        mode == "sendcode" ? sendCodeView() : verifyCodeView()
    )
}


export default Signin;