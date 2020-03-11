import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './HelloWorld.js';

render(<HelloWorld name="test"/>, document.querySelector('#app'));