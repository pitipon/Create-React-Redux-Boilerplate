import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// Style
import './FullPage.scss';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  /**
   * require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
   */
};

const originalColors = ['#282c34', '#ff5f45', '#0798ec'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: `Dicover your future`,
          teaser: `Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds`
        },
        {
          text: 'section 2',
          teaser: 'Shape your future'
        },
        {
          text: 'section 3',
          teaser: 'Shape your future'
        }
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  handleChangeColors() {
    const newColors =
      this.state.sectionsColor[0] === 'yellow'
        ? [...originalColors]
        : ['yellow', 'blue', 'white'];
    this.setState({
      sectionsColor: newColors,
    });
  }

  handleAddSection() {
    this.setState(state => {
      const { fullpages } = state;
      const { length } = fullpages;
      fullpages.push({
        text: `section ${length + 1}`,
        id: Math.random(),
      });

      return {
        fullpages: [...fullpages],
      };
    });
  }

  handleRemoveSection() {
    this.setState(state => {
      const { fullpages } = state;
      const newPages = [...fullpages];
      newPages.pop();

      return { fullpages: newPages };
    });
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 100,
        }}
      >
        <ul>
          <li>
            <button onClick={() => this.handleAddSection()}>+ Section</button>
            <button onClick={() => this.handleRemoveSection()}>
              - Section
            </button>
            <button onClick={() => this.handleChangeColors()}>
              Change colors
            </button>
          </li>
        </ul>
      </div>
    );

    return (
      <div className="App">
        <Menu />
        <ReactFullpage
          debug /* Debug logging */
          navigation
          anchors={['firstPage', 'secondPage', 'thirdPage']}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          pluginWrapper={pluginWrapper}
          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text, teaser }) => (
                <div key={text} className={SEL}>
                  <div className='container'>
                    <div className='box font-white font-xl'>{text}</div>
                    <div className='box font-teaser font-white font-m'>{teaser}</div>
                  </div>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App
