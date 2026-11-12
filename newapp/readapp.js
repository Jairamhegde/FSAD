class HelloWord extends React.Component {
    render() {
        const continents = ['Africa', 'America', 'Asia']
        const helloContents = Array.from(continents, c => `Hello ${c}!`);
        const message = helloContents.join("-----");
        return (
            <div>
                <h1>{message}</h1>
            </div>
        );
    }
}

//React components -Classes
const element = <HelloWord />
ReactDOM.render(element, document.getElementById('contents'));