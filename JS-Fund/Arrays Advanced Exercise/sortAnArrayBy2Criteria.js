function sortingArrayByCriteria(input) {

    input.sort(twoCriteriaSort)
    input.forEach(el => console.log(el))

    function twoCriteriaSort(current, next) {
        if (current.length === next.length) {
            return current.localeCompare(next)
        }
        return current.length - next.length
    }
}