import s from './_under.module.sass';
export const Under = () => {
	return (
		<div className={s.UnderCont}>
			<div className={s.leftCont}>
				<div className={s.MTN}>MNTN</div>
				<div className={s.GET}>Get out there & discover your next</div>
				<div className={s.slope}>slope, mountain & destination!</div>
				<div className={s.a2019}>Copyright 2019 MNTN, Inc. Terms & Privacy</div>
			</div>
			<div className={s.centerCont}>
				<div className={s.More}>More on The Blog</div>
				<div className={s.about}>About MNTN</div>
				<div className={s.Contributors}>Contributors & Writers</div>
				<div className={s.Write}>Write For Us</div>
				<div className={s.Contact}>Contact Us</div>
				<div className={s.Privacy}>Privacy Policy</div>
			</div>
			<div className={s.rightCont}>
				<div className={s.MoreNTV}>More on MNTN</div>
				<div className={s.Team}>The Team</div>
				<div className={s.Jobs}>Jobs</div>
				<div className={s.Press}>Press</div>
			</div>
		</div>
	);
};
