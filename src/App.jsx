import componentsImg from './assets/components.png'
import {CORE_CONCEPTS} from './data'
import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcepts'
import TabButton from "./components/TabButton";
import {useState} from 'react';

const reactFundermentals = ['hello']



function App() {
       const [selectedButton, setSelectedButton] = useState('please select a button');

    function handleButtonClick(selectedButton) {
        setSelectedButton(selectedButton);
        console.log(selectedButton);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h3>Core Concepts</h3>
                    <ul>
                        <CoreConcepts
                            title="components1"
                            description="description2"
                            image={componentsImg}
                        ></CoreConcepts>
                        <CoreConcepts {...CORE_CONCEPTS[0]}/>
                        <CoreConcepts {...CORE_CONCEPTS[1]}/>
                        <CoreConcepts {...CORE_CONCEPTS[2]}/>
                        {/*<CoreConcepts concept = {CORE_CONCEPTS[1]}/>*/}
                    </ul>
                </section>
                <section id="examples">

                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={()=> handleButtonClick('components')}>Components</TabButton> {/*or can pass the text as a attribute*/}
                        <TabButton onSelect={()=> handleButtonClick('jx')}>JX</TabButton> {/*or can pass the text as a attribute*/}
                        <TabButton onSelect={()=> handleButtonClick('props')}>Props</TabButton> {/*or can pass the text as a attribute*/}
                        <TabButton onSelect={()=> handleButtonClick('state')}>State</TabButton> {/*or can pass the text as a attribute*/}
                    </menu>
                </section>
                <h2>{selectedButton}</h2>
            </main>
        </div>
    );
}

export default App;
