/* Libraries */
import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
/* Local Files */
import App from '../src/components/button.js';

it('renders correctly', () => {
  renderer.create(<App />);
});
