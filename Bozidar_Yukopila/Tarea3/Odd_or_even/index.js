function oddOrEven(array) {

    let array_added = 0;

    for (let i = 0; i < array.length; i++) {

        array_added += array[i];
    }

    if (array_added % 2 == 0) {

        return 'even';

    } else {

        return 'odd';

    }
}