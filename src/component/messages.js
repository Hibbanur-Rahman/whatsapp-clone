import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Input from '@mui/material/Input';
import './messages.css'
import { createElement, useState } from 'react';
function Messages() {

    const [value, setValue] = useState("hi this is new value")

    const [arr1, setArr1] = useState([]);
    var arr = [{
                    id: 1,
                    message: <p>hello <br/>hibban</p>
                },
                {
                    id: 2,
                    message: 'hello'
                }, 
                { 
                    id: 3, 
                    message: 'hi' 
                }];
    const arr2 = arr.map((number) => {
        return <Sending key={number.id}
            messages={number.message} />
    })

    return (
        <div className="messages-container">
            <div className="header">
                <div className='profile-photo'>
                    <Avatar
                        alt="hibban-photo"
                        src="https://raw.githubusercontent.com/Hibbanur-Rahman/second-portfolio/main/WhatsApp%20Image%202023-02-02%20at%2015.40.28.jpg"
                        sx={{ width: 50, height: 50 }}
                    />
                    <h4>Hibbanur Rahman</h4>
                </div>
                <div className='video-call-search'>
                    <ul>
                        <li><VideocamOutlinedIcon /></li>
                        <li><LocalPhoneOutlinedIcon /></li>
                        <li>
                            <SearchIcon />
                        </li>
                        <li>
                            <MoreVertIcon />
                        </li>

                    </ul>
                </div>
            </div>
            <div className='messages-section' id='messages-section'>

                <div className='messages-div-bar right'>
                    hi
                </div>

                <div className='messages-div-bar left'>
                    hello
                </div>
                <div className='messages-div-bar right'>
                    hi
                </div>

                <div className='messages-div-bar left'>
                    hello
                </div>
                <div className='messages-div-bar right'>
                    hi
                </div>

                <div className='messages-div-bar left'>
                    hello
                </div>
                <div className='messages-div-bar right'>
                    hi
                </div>

                <div className='messages-div-bar left'>
                    hello
                </div>
                <div className='messages-div-bar right'>
                    hi
                </div>

                <div className='messages-div-bar left'>
                    hello
                </div>
                <div className='messages-div-bar right'>
                    hi
                </div>

                <div className='messages-div-bar left'>
                    hello
                </div>
                <div className='messages-div-bar left'>
                    {value}
                </div>
                <Sending
                    messages='hi' />
                <Receiving
                    messages='Hello' />
                <Sending
                    messages='How are you?' />
                <Receiving
                    messages='i am fine.what about you' />
                {arr2}
                <Receiving
                    messages='abdul rab is goodboy' />
                {/*<Sending
                    messages='alhamdulillah' />
                <Receiving
                    messages='Assalamualaikum' />
                <Receiving
                    messages='Yeh jo BEE k notes h yh pura Unit-1 h na(D.c circuit analysis and network theorems)' />
                <Receiving messages='Assalamualaikum khryt...
                    Iske agey ka send karna plz?'/>
                <Sending
                    messages='Nahi karenge' />
                <Sending
                    messages='Mere pass nahi han' />
                <Receiving
                    messages='Sach mei nahin hai kya?' />
                <Receiving
                    messages='???' />
                <Sending
                    messages='Assalamoalaikum' />
                <Sending
                    messages='Mera bhi sign karwa dein' />
                <Sending
                    messages=' To aap ki maharbani hogi' />
                <Receiving
                    messages='Theek hai' />
                <Sending
                    messages='Mera BONAFIDE bhej dein scan kar ke' />
                <Receiving
                    messages='Okay' />
                <Receiving
                    messages='Ghar jakar bhejdungi' />
                <Sending
                    messages=' assalamoalekum' />
                <Sending
                    messages=' aap ne documents upload kar diya han kya manuu online admission waale par' />
                <Sending
                    messages='last date 30 november tha' />
                <Sending
                    messages=' mera nahi ho rah han' />
                <Receiving
                    messages='offline Submit krne h na documents university mei' />
                <Receiving
                    messages='Walaikumassalam' />
                <Receiving
                    messages='Hogaye sign stamp padwana' />
                 */}
                <div id='demo'></div>

            </div>
            <div className='send_div'>
                <div className='attachment-icon'>
                    <TagFacesIcon sx={{ marginRight: 1.5, height: 30, width: 30 }} />
                    <AttachmentOutlinedIcon sx={{ height: 30, width: 30 }} />
                </div>
                <div className='text-area'>
                    {/* <input placeholder='type a message'/> */}
                    <textarea placeholder='Type a message' id='sending-message' />
                    {/* <Input/> */}
                </div>
                <div className="send-vector-icon">
                    <SendOutlinedIcon onClick={Display_message} sx={{ width: 35, height: 35 }} />
                </div>
            </div>

        </div>
    );
}
function Sending(props) {
    return (
        <div className='messages-div-bar right'>
            <p>{props.messages}</p>
        </div>
    );
}
function Receiving(props) {
    return (
        <div className='messages-div-bar left'>
            <p>{props.messages}</p>
        </div>
    );
}
function Display_message() {
    var div = document.createElement(div);
    var message = document.getElementById('sending-message').value;
    var para = document.createTextNode(message);
    div.classList.add('messages-div-bar', 'right');
    div.style.marginBottom = '4px';
    div.appendChild(para);
    document.getElementById('demo').appendChild(div);
}
export default Messages;