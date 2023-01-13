module.exports = function towelSort(matrix) {
	if (matrix == undefined) return [];
	for (let i = 1; i < matrix.length; i += 2) {
		matrix[i].reverse();
	}
	matrix = matrix.flat();
	return matrix
}
