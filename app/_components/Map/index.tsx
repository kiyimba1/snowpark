import dynamic from "next/dynamic";
import classes from "./index.module.css";

const DynamicMap = dynamic(() => import("./DynamicMap"), {
	ssr: false,
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const Map = () => {
	return (
		<div className={classes.mapContainer}>
			<DynamicMap />
		</div>
	);
};

export default Map;
