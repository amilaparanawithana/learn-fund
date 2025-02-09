import reactImg from './assets/react-core-concepts.png'

const reactFundermentals = ['hello']


function gerRandomNumber () {
    return Math.floor(Math.random() * 3)
}

function Header() {

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials- header seperated</h1>
            <p>
                Fundamental React concepts you will need for almost any app you are
                going to build! {gerRandomNumber()}
            </p>
        </header>
    )
}


function App() {
  return (
    <div>
     <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
