import { GlobalSvgSelector } from 'src/GlobalSvgSelector';
import i from './01.png';
import s from './_Main.module.sass';
export const Main = () => {
	return (
		<div className={s.MainCont}>
			<div className={s.TextMain}>
				<div className={s.Zero}>01</div>
				<div className={s.Started}>
					<div className={s.stroka}></div>GET STARTED
				</div>
				<div className={s.Level}>
					<div>What level of hiker</div>
					<div>are you?</div>
				</div>
				<div className={s.lorem}>
					Determining what level of hiker you are can be an important tool when
					planning future hikes. This hiking level guide will help you plan
					hikes according to different hike ratings set by various websites like
					All Trails and Modern Hiker. What type of hiker are you – novice,
					moderate, advanced moderate, expert, or expert backpacker?
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
