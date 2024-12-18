import './App.css'
import landingImg from './assets/landing.png';

function App() {
    return (
    <>
        <Navbar/>
        <HeroSection/>
    </>
    )
}

const Navbar = () => {
    return (
        <nav id="navbar">
            <a href='#Home'>Home</a>
            <a href='#Quizes'>Quizes</a>
            <a href='#Games'>Games</a>
            <a href='#MyProfile'>MyProfile</a>
        </nav>
    )
}

const HeroSection = () => {
    return (
        <div id='hero-content'>
            <div id='Logo'>
                <h3>Trivia</h3>
            </div>
            <h1>Play, Learn, Acheive</h1>
            <img src={landingImg} alt="landing" />
        </div>
    )
}

export default App
