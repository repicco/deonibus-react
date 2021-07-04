import './App.css';
import Header from './components/Header'
import Links from './components/Links'
import Trip from './components/Trip'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header/>
      <div className="deOnibus">
        <Links/>
        <div className="deOnibus__container">
          <Trip/>
        </div>
      </div>
      <Footer/>
    </>
  );
}