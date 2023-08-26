import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MakeRoutes } from './routes';
import Modal from 'react-modal';

function App() {
  Modal.setAppElement('#root');

  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      closeButton={false}
      hideProgressBar
      closeOnClick={false}
      pauseOnHover
      draggable
      bodyStyle={{ padding: '0px', borderRadius: '5px', width: '100%'}}
      toastStyle={{ padding : '0px', borderRadius: '5px', width: '100% ', boxShadow: " 0px 20px 25px #0000001A"}}
    />
    <MakeRoutes />
  </>
      
  );
}

export default App;