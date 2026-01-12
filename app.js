




function App(){

    return(
        <div>
            <Header></Header>
            <h2>React APP</h2>
            <p>This is a p tag</p>


        </div>
    );

}




function Header(){
    return(
        <header>
            <h2>My Header</h2>
            <nav>
                <a href="./">HOME</a>
            </nav>
        </header>
    )
}



ReactDOM.createRoot(document.querySelector("#root")).render(App())