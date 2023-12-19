import Image from "next/image";
import Nav from "../NavBar";
import Description from "./Description";
import Rating from "./Rating";
import Season from "./Season";
import styles from "./index.module.css";

const Hero = () => {
	return (
		<div className={styles.container}>
			<div className={styles.background}>
				<Image className={styles.backgroundImage} src="/media/background.jpg" fill={true} alt={"Snow Park"} />
			</div>
			<div className={styles.content}>
				<div className={styles.leftHero}>
					<div className={styles.season}>
						<Season />
					</div>
					<div className={styles.description}>
						<Description />
					</div>
					<div className={styles.rating}>
						<Rating />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
