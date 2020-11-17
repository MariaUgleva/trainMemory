import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './reducers/reducer';
import { addCartsToState } from './actions/cardsActions';
import Header from './components/Header';
import Rules from './components/Rules';
import CardsList from './components/CardsList';
import { setActiveStatus } from './actions/gameStatus';
import { resetScore } from './actions/scoreActions';
import {changeTopScore} from './actions/topScoreActions';
let data = require('./characters.json');
const App: React.FC = () => {
	const dispatch = useDispatch();
	let score: number = useSelector((state: AppState) => state.score);
	const status: string = useSelector((state: AppState) => state.gameStatus);
	useEffect(() => {
		dispatch(addCartsToState(JSON.parse(JSON.stringify(data))));
	}, [status]);
	const restart = () => {
		dispatch(setActiveStatus());
		dispatch(changeTopScore(score));
		dispatch(resetScore());
	};

	return (
		<div className="App">
			<Header />
			<Rules />
			<div className="container">
				<button className='restart' onClick={restart}>Restart</button>
			</div>
			<CardsList />
		</div>
	);
};

export default App;
