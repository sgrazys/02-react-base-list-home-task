import './App.css';
// import DogItem from './Components/DogItem';


function App() {

	const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'aviganis'];

	return (
		<div className='App'>

			<ul>
				{/* {dogs.map(e => <DogItem dog={e} key={Math.random()} />)} */}
			</ul>

			<ul>
				{/* {[...dogs].sort((a, b) => a.length - b.length).filter(e => e[0] !== e[0].toUpperCase()).map((e, i) => <li className={`list ${i % 2 !== 0 && 'circle'}`} key={Math.random()}>{e}</li>)} */}

				{[...dogs].map((e, i) => <li className={`list ${i % 2 !== 0 && 'circle'} ${e.length > 6 ? 'green' : 'red'}`} key={Math.random()}>{e.length}</li>)}
			</ul>

		</div>
	);
}

export default App;
