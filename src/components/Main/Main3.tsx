import { GlobalSvgSelector } from 'src/GlobalSvgSelector';
import i from './03.png';
import s from './_Main3.module.sass';
export const Main3 = () => {
	return (
		<div className={s.MainCont}>
			<div className={s.TextMain}>
				<div className={s.Zero}>03</div>
				<div className={s.Started}>
					<div className={s.stroka}></div>WHERE YOU GO IS THE KEY
				</div>
				<div className={s.Level}>
					<div>Understand Your</div>
					<div>Map & Timing</div>
				</div>
				<div className={s.lorem}>
					To start, print out the hiking guide and map. If it’s raining, throw
					them in a Zip-Lock bag. Read over the guide, study the map, and have a
					good idea of what to expect. I like to know what my next landmark is
					as I hike. For example, I’ll read the guide and know that say, in a
					mile, I make a right turn at the junction..
				</div>
				<div className={s.readMore}>
					<div className={s.read}>read more</div>
					<div className={s.strelka}>
						<GlobalSvgSelector id='StrelkaRight' />
					</div>
				</div>
			</div>
			<img src={i}></img>
		</div>
	);
};
