import './App.css';


function Header (){
    return (
        <>
            <Title text="I am header component" age={50}/>
            <p>Lorem ipsum dolor sit. </p>
            <button>send</button>
        </>
    )
}

function Footer (){
    return(
        <>
            <Title text="I am footer component"  age={27}/>
            <button>go to home</button>
        </>
    )
}

function  Content (){
    return(
        <>
            <Title text="I am content component" age={17}/>
            <p>Content title</p>
        </>
    )
}

function Title (props){
    // console.log(props.text)
    return <h2>{props.text} - {props.age}</h2>
}

function App() {
    return (
    <div className="App">
        <Header/>
      <h1>Hello world</h1>
    <Footer/>
        <Content/>
    </div>
  );
}

export default App;
