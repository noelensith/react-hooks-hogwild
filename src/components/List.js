import React from "react";
import Card from './Card'

function List({ hogs }) {
  return (
		<div className="ui three stackable cards">
			{hogs.map(hog => (
				<Card
					key={hog.name}
					hog={hog}
				/>
			))}
		</div>
  );
}

export default List;