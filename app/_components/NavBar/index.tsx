import Link from "next/link";
import styles from "./index.module.css";

import { HiOutlinePhone } from "react-icons/hi2";

const Nav = () => {
	return (
		<div className={styles.container}>
			<nav className={styles.navContainer}>
				<div className={styles.title}>
					<h4>SNOW PARK</h4>
				</div>
				<div className={styles.actions}>
					<Link href="/help">Help Center</Link>
					<Link href="/">
						<HiOutlinePhone />
						1-800-891-2256
					</Link>
					<select
						className={styles.currencySelector}
						name="country"
						id="country">
						<option value="Uganda">Ugx</option>
						<option value="USA">USD</option>
					</select>
				</div>
			</nav>
		</div>
	);
};
export default Nav;
