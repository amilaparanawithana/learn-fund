import componentsImg from './assets/components.png'
import {CORE_CONCEPTS, EXAMPLES} from './data'
import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcepts'
import TabButton from "./components/TabButton";
import {useState} from 'react';

const reactFundermentals = ['hello']

function App() {
    const [selectedButton, setSelectedButton] = useState('');

    function handleButtonClick(selectedButton) {
        setSelectedButton(selectedButton);
        console.log(selectedButton);
    }

    let tabContent = <p>Please select a tab</p>

    if (selectedButton) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedButton].title}</h3>
                <p>{EXAMPLES[selectedButton].description}</p>
                <pre>
                        <code>
                    {EXAMPLES[selectedButton].code}
                        </code>
                        </pre>
            </div>
        );
    }
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h3>Core Concepts</h3>
                    <ul>
                        {CORE_CONCEPTS.map(conceptItem => <CoreConcepts key = {conceptItem.title} {...conceptItem}/>)}
                        {/*<CoreConcepts
                            title="components1"
                            description="description2"
                            image={componentsImg}
                        ></CoreConcepts>
                        <CoreConcepts {...CORE_CONCEPTS[0]}/>
                        <CoreConcepts {...CORE_CONCEPTS[1]}/>
                        <CoreConcepts {...CORE_CONCEPTS[2]}/>*/}

                        {/*<CoreConcepts concept = {CORE_CONCEPTS[1]}/>*/}
                    </ul>
                </section>
                <section id="examples">

                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedButton === 'components'}
                            onSelect={() => handleButtonClick('components')}>Components</TabButton> {/*or can pass the text as a attribute*/}
                        <TabButton isSelected={selectedButton === 'jsx'}
                            onSelect={() => handleButtonClick('jsx')}>JX</TabButton> {/*or can pass the text as a attribute*/}
                        <TabButton isSelected={selectedButton === 'props'}
                            onSelect={() => handleButtonClick('props')}>Props</TabButton> {/*or can pass the text as a attribute*/}
                        <TabButton isSelected={selectedButton === 'state'}
                            onSelect={() => handleButtonClick('state')}>State</TabButton> {/*or can pass the text as a attribute*/}
                    </menu>
                </section>
                <h2>{selectedButton}</h2>

                {tabContent}
                {/*{!selectedButton ? <p>Please select a topic</p> :
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedButton].title}</h3>
                        <p>{EXAMPLES[selectedButton].description}</p>
                        <pre>
                        <code>
                    {EXAMPLES[selectedButton].code}
                        </code>
                        </pre>
                    </div>}*/}

            </main>
        </div>
    );
}

export default App;
