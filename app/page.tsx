import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./_components/Hero";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.hero}>
				<Hero />
			</div>
		</div>
	);
}
