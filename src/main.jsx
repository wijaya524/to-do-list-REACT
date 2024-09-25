import './style.css';
import { createRoot } from 'react-dom/client';
import TodoApp from './TodoApp';
 
 
const root = createRoot(document.getElementById('root'));
root.render(<TodoApp />);