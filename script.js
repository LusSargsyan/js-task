function onSubmitSort() {
    let elements = document.getElementById('elements').value;
    let number = document.getElementById('number').value;
    var array = elements.split(",");

    let sortedArray = array.sort((prev, next) => {
        if (prev > next) {
            return 1;
        } else if (next > prev) {
            return -1;
        } else {
            return 0;
        }
    });

    compare(sortedArray, number);
}

function compare(array, number) {
    let isEqual = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((+array[i] + +array[j]) == number) {
                isEqual = true;
            }
        }
    }

    alert(isEqual);
}

