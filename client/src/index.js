import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './components/App'
import rootReducer from './reducers'

// Store作成
const store = createStore(rootReducer);

// レンダリング
const render = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}

// Store変更を購読
store.subscribe(() => {
    render()
    console.log(store.getState().form)
});

// 初回レンダリング
render();



// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
