import { createRoot } from 'react-dom/client';
import { AiVoice02 } from './icons/outline/';

const App = () => {
  return <AiVoice02 size={24} />;
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(<App />);
