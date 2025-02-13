import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'
import {CORE_CONCEPTS} from './data'
import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcepts'
import TabButton from "./components/TabButton";

const reactFundermentals = ['hello']

function App() {
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
                        <TabButton>Components</TabButton> {/*or can pass the text as a attribute*/}
                        <TabButton>JX</TabButton> {/*or can pass the text as a attribute*/}
                        <TabButton>Props</TabButton> {/*or can pass the text as a attribute*/}
                        <TabButton>State</TabButton> {/*or can pass the text as a attribute*/}
                    </menu>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
