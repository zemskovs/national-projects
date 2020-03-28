import * as React from "react";
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet";
import * as L from "leaflet";
import { useModal } from "../../hooks/useModal";
import { MapMoadlEvent } from "../modals/MapModalEvent";

import "./mapStyles.css";

export type MapProps = {
	data: any;
};

export const Map: React.FC<MapProps> = props => {
	const modalService = useModal();
	const center = props.data.center;
	return (
		<div className="pb-5">
			<h3 className="text-center pt-5 pb-3 text-uppercase">
				Объекты национального проекта
			</h3>
			<LeafletMap
				center={center}
				zoom={10}
				attributionControl={true}
				zoomControl={true}
				doubleClickZoom={true}
				scrollWheelZoom={true}
				dragging={true}
				animate={true}
				easeLinearity={0.35}
			>
				<TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
				{props.data.markers.map((marker, idx) => (
					<Marker
						onClick={() =>
							modalService.show(
								<MapMoadlEvent eventId={marker.eventId} />
							)
						}
						key={idx}
						position={marker.position}
					></Marker>
				))}
			</LeafletMap>
		</div>
	);
};
