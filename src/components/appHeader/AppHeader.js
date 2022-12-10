import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="header">
            <button className='header__logo'>
                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M30.5 61C47.3447 61 61 47.3447 61 30.5C61 26.9626 60.3978 23.5658 59.2903 20.4066L20.4066 59.2903C23.5658 60.3978 26.9626 61 30.5 61ZM5.8537 48.4705L20.8189 33.5053L3.53949 16.2258C1.27994 20.4847 0 25.3429 0 30.5C0 37.219 2.17264 43.4306 5.8537 48.4705ZM16.2258 3.53949L33.5053 20.8189L48.4705 5.85371C43.4306 2.17264 37.219 0 30.5 0C25.3429 0 20.4847 1.27994 16.2258 3.53949Z" fill="#FDBF5A"/>
                    <path d="M10.0534 10.1304L13.8274 13.9044" stroke="#FDBF5A" strokeWidth="4"/>
                    <path d="M18.127 48.8897L14.3529 52.6637" stroke="#FDBF5A" strokeWidth="4"/>
                    <path d="M24.8549 41.7133L21.0809 45.4873" stroke="#FDBF5A" strokeWidth="4"/>
                    <path d="M31.5828 34.5367L27.8088 38.3108" stroke="#FDBF5A" strokeWidth="4"/>
                    <path d="M45.0387 20.1838L41.2647 23.9579" stroke="#FDBF5A" strokeWidth="4"/>
                    <path d="M51.7667 13.0073L47.9926 16.7813" stroke="#FDBF5A" strokeWidth="4"/>
                    <path d="M17.0441 17.0441L20.8181 20.8181" stroke="#FDBF5A" strokeWidth="4"/>
                    <path d="M24.6691 24.6691L28.4431 28.4431" stroke="#FDBF5A" strokeWidth="4"/>
                    <path d="M38.3108 27.3604L34.5368 31.1344" stroke="#FDBF5A" strokeWidth="4"/>
                </svg>
                <p>loft<span>taxi</span></p>
            </button>
            <nav>
                <ul>
                    <li><button>Карта</button></li>
                    <li><button>Профиль</button></li>
                    <li><button>Выйти</button></li> 
                </ul>
            </nav> 
        </header> 
    )
}

export default AppHeader;