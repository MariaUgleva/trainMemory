import React from 'react';
import { CardSrtucture } from '../../type';
import { changeCardClicked } from '../../actions/cardsActions';
import { increaseScore } from '../../actions/scoreActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../reducers/reducer';
import { setFailedStatus, setWinStatus } from '../../actions/gameStatus';
import {changeTopScore} from '../../actions/topScoreActions';

type CardType = {
	data: CardSrtucture;
	toMix: () => Array<CardSrtucture>;
};

const Card: React.FC<CardType> = ({ data, toMix }) => {
	const dispatch = useDispatch();
	let score: number = useSelector((state: AppState) => state.score);
	const allCards: Array<CardSrtucture> = useSelector((state: AppState) => state.allCards);
	const status: string = useSelector((state: AppState) => state.gameStatus);
	if (score === allCards.length) {
		dispatch(changeTopScore(score));
		dispatch(setWinStatus()); 
	}
	const handleClick = (event: any): void => {
		if (status === 'active') {
			if (allCards.find((item) => item.id === +event.currentTarget.id)?.clicked) {
				dispatch(changeTopScore(score));
				dispatch(setFailedStatus());
				return;
			}
			dispatch(changeCardClicked(+event.currentTarget.id));
			dispatch(increaseScore());
		}
	};
	return (
		<div onClick={handleClick} className="card" id={data.id.toString()}>
			<div className="card__inner">
				<img src={data.image} alt="" className="card__img" />
				<div className="card__info">
					<span className="card__name">{data.name}</span>
					<span className="card__occupation">{data.occupation}</span>
				</div>
			</div>
		</div>
	);
};
export default Card;
