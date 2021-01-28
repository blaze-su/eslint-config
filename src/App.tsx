import logo from "./logo.svg";
import "./App.css";

const fn = () => {
	// eslint-disable-next-line
    console.log("fn");
};

const fn2 = (next: any) => {
	const arr = ["news", "dota", "sun beach"];
	console.log("fn", next);
	const a = 1;

	if (a === 1) console.log("a", a);

	return {a, arr};
};

fn();
fn2("fn22");

const fn3 = (a: number, b: number, c: number, d: number) => {
	const a1 = 3;
	const a2 = 4;
	const obj = {
		a,
		b,
		c,
		d,
	};

	const obj2 = {a, b};
	const arr0 = [1, 2];
	const arr = [
		...arr0,
		1,
		2,
		3,
		3,
		4,
		4,
		1,
		2,
		3,
		3,
		4,
		4,
	];

	return {
		a,
		b,
		c,
		d,
		arr,
		a1,
		a2,
		obj,
		obj2,
	};
};

fn3(1, 2, 3, 4);

/**
 * @Params []
 */
const App = () => (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit
				<code>src/App.tsx</code>
				and save to reload.
			</p>
			<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
				Learn React
			</a>
		</header>
	</div>
);

export default App;
