import { GlobalSvgSelector } from 'src/GlobalSvgSelector';
import i from './02.png';
import s from './_Main2.module.sass';
export const Main2 = () => {
	return (
		<div className={s.MainCont}>
			<img src={i}></img>
			<div className={s.TextMain}>
				<div className={s.Zero}>02</div>
				<div className={s.Started}>
					<div className={s.stroka}></div>HIKING ESSENTIALS
				</div>
				<div className={s.Level}>
					<div>Picking the right</div>
					<div>Hiking Gear!</div>
				</div>
				<div className={s.lorem}>
					The nice thing about beginning hiking is that you don’t really need
					any special gear, you can probably get away with things you already
					have.Let’s start with clothing. A typical mistake hiking beginners
					make is wearing jeans and regular clothes, which will get heavy and
					chafe wif they get sweaty or wet.
				</div>
				<div className={s.readMore}>
					<div className={s.read}>read more</div>
					<div className={s.strelka}>
						<GlobalSvgSelector id='StrelkaRight' />
					</div>
				</div>
			</div>
		</div>
	);
};
