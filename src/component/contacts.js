import './contacts.css'
import { Avatar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
function Contacts() {
    return (
        <div className="contact-container">
            <div className="heading">
                <div className='profile-photo'>
                    {/* <img  src="" alt="profile-photo"></img> */}
                    <Avatar
                        alt="hibban-photo"
                        src="https://raw.githubusercontent.com/Hibbanur-Rahman/second-portfolio/main/WhatsApp%20Image%202023-02-02%20at%2015.40.28.jpg"
                        sx={{ width: 40, height: 40, marginTop: 1 }}
                    />
                </div>
                <div className='contacts-icons'>
                    <ul>
                        <li><GroupsIcon sx={{ width: 30, height: 30 }} /></li>
                        <li><DonutLargeIcon /></li>
                        <li><ChatIcon /></li>
                        <li><MoreVertIcon /></li>
                    </ul>
                </div>
            </div>
            <div className="search_menu">
                <div className='inner-search-menu'>
                    <div>
                        <SearchIcon />
                    </div>
                    <div>
                        <input type="text" placeholder='Search or start new chat' />
                    </div>
                </div>
                <FilterListIcon className='filter-icon' />
            </div>
            <div className="contacts-menu">
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/farhan.png"
                    name="Farhanur Rahman"
                    message="hi hello"
                />
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/help_desk.png"
                    name="HELP DESK MANUU"
                    message="hi hello" />
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/ashad-jamal%20dp.png"
                    name="Ashad Jamal"
                    message="hi hello" />
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/aman-bhai%20dp.png"
                    name="Aman Bhai"
                    message="hi hello" />
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/bhaijan%20dp.png"
                    name="Bhaijaan"
                    message="hi hello" />
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/bushra%20parveen%20dp.png"
                    name="Bushra Parween"
                    message="hi hello" />
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/aiasl%20dp.png"
                    name="AIASL Family"
                    message="hi hello" />
                <Contact_bar src="https://pps.whatsapp.net/v/t61.24694-24/309646926_553454980146820_861181164478832823_n.jpg?ccb=11-4&oh=01_AdR3wL-YtuN-q5dcHvEQYJTKXcJuKnI_ZtcGciI5LR64gg&oe=641600E5"
                    name="Aman Hussain"
                    message="hi hello" />
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/dept%20cs%26it%20dp.png"
                    name="DEPT OF CS&IT STUDENT's"
                    message="hi hello" />
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/ramsha%20parveen%20dp.png"
                    name="Ramsha"
                    message="hi hello" />
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/tp%20cell.png"
                    name="TP CELL,CS&IT MANUU"
                    message="hi hello" />
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/mannu-dp.png"
                    name="mdmonauwarulislam"
                    message="hi hello" />
                <Contact_bar src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/fareeha%20rasheed.png"
                    name="Fareeha Rasheed"
                    message="hi hello" />
                <Contact_bar src=""
                    name="B.tech_4th_sem_Unofficial"
                    message="hi hello" />
            </div>
        </div>
    );
}

function Contact_bar(props) {
    return (
        <div className='message-div'>
            <div>
                <Avatar
                    alt="hibban-photo"
                    // src="https://raw.githubusercontent.com/Hibbanur-Rahman/second-portfolio/main/WhatsApp%20Image%202023-02-02%20at%2015.40.28.jpg"
                    src={props.src}
                    sx={{ width: 50, height: 50, marginTop: 1, marginLeft: 1 }}
                />
            </div>
            <div className='message-content'>
                <h4>{props.name}</h4>
                <p>{props.message}</p>
            </div>
        </div>
    );
}
export default Contacts;