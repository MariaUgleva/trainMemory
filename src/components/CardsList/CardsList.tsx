import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import { AppState } from '../../reducers/reducer';
import { CardSrtucture } from '../../type';

const CardsList: React.FC = () => {
	function mix(): Array<CardSrtucture> {
		return allCards.sort(() => Math.random() - 0.5);
	}
	const status: string = useSelector((state: AppState) => state.gameStatus);
	const allCards: Array<CardSrtucture> = useSelector((state: AppState) => state.allCards);
	return (
		<div className="container">
			{status === 'failed' ? <span className='gameResult'>Fail!</span> : status === 'win' ? <span className='gameResult'>Win!</span> :null}
			<div className="cards">
				{mix().map((item: CardSrtucture) => (
					<Card toMix={mix} key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};
export default CardsList;
