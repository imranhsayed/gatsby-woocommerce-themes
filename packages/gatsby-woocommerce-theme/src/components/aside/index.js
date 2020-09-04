import React from "react";
import { isEmpty } from "lodash";
import CategoryWidget from "./widgets/categories";

const Aside = ( { categories } ) => {

	if ( isEmpty( categories ) ) {
		return null;
	}

	return (
		<aside className="aside col-md-4">
			<CategoryWidget categories={categories}/>
		</aside>
	)
}

export default Aside
