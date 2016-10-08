'use strict';

// TODO given a string, i need to know if it is an address.
// if it is, break it up into the parts.
// if it is not, it could be a building/company/person name.
module.exports = (function() {

	/*
	 * Splits the given search sting by spaces, returning an array.
	 */
	const si = function splitInput(searchString) {

		let isUsableInput = false;

		const vals = searchString.split(' ');

		if (vals.length == 1) {
			// name/company/building

		} else if (vals.length == 2) {

			// name/company/building, or street + number (200 Wallnut)

			let address;

			if (Number.isInteger(vals[0])) {
				
				if (!Number.isInteger(vals[1])) {
					isUsableInput = true;
				} else {
					// probs an address. should search for company name as well.
					getAddressObject(searchString);
				}

			} else {

				isUsableInput = true;

				if (Number.isInteger(vals[1])) {
					// could just be backwards
					getAddressObject([vals[1], vals[2]]);
				} else {
					// probs a company name
					getAddressObject([vals[0], vals[1]]);
				}
			}

		} else if (vals.length == 3) {
			// name/company/building, or street + number (200 Cherry St)

		} else if (vals.length == 4) {
			// name/company/building, or street + number (200 Mt Vernon St)

		} else if (vals.length == 5) {
			// name/company/building, or street + number + zip(200 Mt Vernon St 19190)

		}

	};

	/*
	 * 
	 */
	const isAddress = function isAddress(){

	};

	/*
	 * Builds a address object from a given input string.
	 */
	const getAddressObject = function getAddressObject(obj) {

	};

	return {

	};

})();