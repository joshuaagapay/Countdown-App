import React, { useState } from "react";
import Video from "../Assets/videos/christmas.mp4";
const Xmas = () => {
	const [day, setDay] = useState(0);
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(0);
	const [second, setSecond] = useState(0);

	const currentYear = new Date().getFullYear();
	const christmas = new Date(`December 25 ${currentYear} 00:00:00`);

	function updateCountDownTime() {
		const currentTime = new Date();
		const timer = christmas - currentTime;
		setDay(Math.floor(timer / 1000 / 60 / 60 / 24));
		setHour(Math.floor(timer / 1000 / 60 / 60) % 24);
		setMinute(Math.floor(timer / 1000 / 60) % 60);
		setSecond(Math.floor(timer / 1000) % 60);
	}

	setInterval(updateCountDownTime, 1000);
	return (
		<div className="xmas-container">
			<div className="video-container">
				<video
					autoPlay={true}
					muted
					loop
					src={Video}
					type="video/mp4"
				/>
			</div>
			<div className="overlay"></div>
			<section className="countdown">
				<div>
					<div className="countdown__title">
						<h1>Christmas is Coming</h1>
					</div>
					<div className="countdown__body">
						<div className="countdown__day">
							<h2>{day}</h2>
							<p>DAYS</p>
						</div>
						<div className="countdown__hour">
							<h2>{hour}</h2>
							<p>HOURS</p>
						</div>
						<div className="countdown__minute">
							<h2>{minute}</h2>
							<p>MINUTES</p>
						</div>
						<div className="countdown__second">
							<h2>{second}</h2>
							<p>SECONDS</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Xmas;
