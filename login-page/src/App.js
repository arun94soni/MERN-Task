import './App.css';
import LoginPage from './LoginPage';

function App() {
  return (
    <div className="App">
      <div className='loginPage' style={{backgroundColor: '#586c80', height: '100vh', display:'flex', margin: '0 18%'}}>
        <div className='loginPage-inner' style={{color:'white', backgroundColor:'red', display:'flex',
              flex: 1, width:'100%', margin:'10% 10%'}}>
          <div className='first' style={{display:'flex', flex:'0.5', backgroundColor: '#2c3e50'}}>
            
          </div>
          <div className='second' style={{display:'flex', flex:'0.5', backgroundColor: 'orange', alignItems:'center',
        justifyContent:'center'}}>
            <LoginPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
