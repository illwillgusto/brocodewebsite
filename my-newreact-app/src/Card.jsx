import profilePic from './assets/profile.jpeg'

function Card() {
	return (
		<div className='card'>
			<img className='card-image' src={profilePic} alt='profile picture'></img>
			<h2 className='card-title'>Will</h2>
			<p className='card-description'>I am a Solutions Engineer and play video games</p>
		</div>
	);
}

export default Card;
