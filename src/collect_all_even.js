'use strict';

function collect_all_even(collection) {
  var even_array=[];
  for(var i=0;i<collection.length;i++)
  {
	  if(collection[i]%2==0)
	  {
		  even_array.push(collection[i]);
	  }
  }
  return even_array;
}

module.exports = collect_all_even;
