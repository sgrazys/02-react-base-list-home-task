import './App.css';
// import DogItem from './Components/DogItem';


function App() {

	const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

	return (
		<div className='App'>

			<ul>
				{/* {dogs.map(e => <DogItem dog={e} key={Math.random()} />)} */}
			</ul>

			<ul>
				{[...dogs].sort((a, b) => a.length - b.length).map((e, i) => <li className={`list ${i % 2 !== 0 && 'circle'}`} key={Math.random()}>{e}</li>)}
			</ul>

		</div>
	);
}

export default App;
