import { GlobalSvgSelector } from 'src/GlobalSvgSelector';
import s from './_Header.module.sass';
export const Header = () => {
	return (
		<>
			<div className={s.background}></div>
			<div className={s.backgroundStyle}></div>
			<div className={s.backgroundMG}></div>
			<div className={s.backgroundVG}></div>
			<div className={s.backgroundStyle}></div>
			<div className={s.backgroundLV}></div>
			<div className={s.backgroundVV}></div>
			<div className={s.backgroundVVV}></div>

			<div className={s.contHeader}>
				<div className={s.logo}>MNTN</div>
				<div className={s.center}>
					<div className={s.Equipment}>Equipment</div>
					<div className={s.AboutUs}>About us</div>
					<div className={s.Blog}>Blog</div>
				</div>
				<div className={s.profile}>
					<div className={s.Logo}>
						<GlobalSvgSelector id='prof' />
						<div className={s.Prof}>profile</div>
					</div>
				</div>
			</div>

			{/* левая часть */}
			<div className={s.mainHeader}>
				<div className={s.FolowUs}>
					<div className={s.Text}>Folow Us</div>
					<div className={s.Inst}>
						<GlobalSvgSelector id='Inst' />
					</div>
					<GlobalSvgSelector id='Twitter' />
				</div>

				{/* центральная часть  */}
				<div className={s.mainText}>
					<div className={s.oneLine}>
						<div className={s.cherta}></div>
						<div className={s.Hiking}>A Hiking guide</div>
					</div>
					<div className={s.TextMain}>
						<div className={s.T1}>Be prepared for the</div>

						<div className={s.T2}>Mountains and beyond!</div>
					</div>
					<div className={s.scrol}>
						<div className={s.Scrol}>scroll down</div>
						<GlobalSvgSelector id='Strelka' />
					</div>
				</div>

				{/* правая часть */}
				<div className={s.Start}>
					<div className={s.StartPos}>
						<div className={s.Start}>Start</div>
						<div className={s.Number}>01</div>
						<div className={s.Number}>02</div>
						<div className={s.Number}>03</div>
					</div>
					<div className={s.Line}>
						<GlobalSvgSelector id='lineRight' />
					</div>
				</div>
			</div>
		</>
	);
};
