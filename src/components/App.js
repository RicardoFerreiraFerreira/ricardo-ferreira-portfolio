import Header from './Header';
import Body from './Body';
import './App.css';
import Footer from './Footer';

const App = ({technologies}) => {
    return (
        <div id="app" className="App">
            <Header />
            <Body technologies={technologies}/>
            <Footer />
        </div>
    )
}

export default App;