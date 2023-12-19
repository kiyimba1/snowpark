"use client";

import { useEffect } from "react";
import { LatLng } from "leaflet";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import "./leaflet.css";
import classes from "./index.module.css";

const Map = () => {
	useEffect(() => {
		(async function init() {})();
	}, []);

	const position = new LatLng(51.505, -0.09);

	return (
		<MapContainer
			center={position}
			zoom={13}
			scrollWheelZoom={false}
			className={classes.map}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
