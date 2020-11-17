import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers/reducer';

const Header: React.FC = () => {
	let score: number = useSelector((state: AppState) => state.score);
	let topScore: number = useSelector((state: AppState) => state.topScore);
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<span className="logo">Memory Game</span>
					<div className="score">
						<span className="score__actual">Score: {score}</span>
						<span className="score__top">Top score: {topScore}</span>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
