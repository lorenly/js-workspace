'use strict';

function countSameElements(collection) {
  let collectionDistinct = new Array();
	let output = new Array();

	collection.forEach(item =>{
		let obj;
		let tempArr = [];
		if(item.includes('-') || item.includes('[') || item.includes(':')){
			tempArr = item.split('-').join('[').split(']').join(':');
		}

		if(tempArr[0])
		obj = output.find(({key}) => key == item);
			if(!obj && !(item.includes('-') || item.includes('[') || item.includes(':')))
				output.push({key: item, count: 1});
			else
				obj.count++;
		
	});
	return output;
}
