/** @format */
import s from './_App.module.sass';
import { Main } from './components/Main/Main';
import { Main2 } from './components/Main/Main2';
import { Main3 } from './components/Main/Main3';
import { Header } from './components/header/Hader';
import { Under } from './components/under/Under';
function App() {
	return (
		<div className={s.AppMain}>
			<Header></Header>
			<Main></Main>
			<Main2></Main2>
			<Main3></Main3>
			<Under></Under>
		</div>
	);
}

export default App;
