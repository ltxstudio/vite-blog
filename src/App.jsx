import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatBot from './components/ChatBot';
import ImageGenerator from './components/ImageGenerator';
import CodeWriter from './components/CodeWriter';

const App = () => {
  const notify = () => toast("Tools are ready!");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AI Tools</h1>
      <ChatBot />
      <ImageGenerator />
      <CodeWriter />
      <button onClick={notify} className="bg-green-500 text-white p-2 mt-4">Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default App;
