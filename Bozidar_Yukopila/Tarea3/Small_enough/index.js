
function smallEnough(a, limit) {

    let condit;

    for (i = 0; i < a.length; i++) {

        if (a[i] <= limit) { condit = true; }

        else {
            condit = false;

            break;
        }

    }

    return condit;

}
