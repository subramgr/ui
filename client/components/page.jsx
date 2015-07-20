import React from 'react/addons';
import List from './List';
import Camera from './Camera';

var data = {
  things: [
    { id: 1, name: 'Thing 1', image: 'http://dummyimage.com/200x200' },
    { id: 2, name: 'Thing 2', image: 'http://dummyimage.com/200x200' },
    { id: 3, name: 'Thing 3', image: 'http://dummyimage.com/200x200' }
  ]
};

export default class Page extends React.Component {
  render () {
    return (
      <div>
        <Camera sourceQuery={ { facing: 'environment' } } />
        <List things={data.things} />
      </div>
    );
  }
}
