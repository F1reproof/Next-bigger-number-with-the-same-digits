function nextBigger(n){
    var d = n.toString().split('');

    var p = -1;
    for (var i = d.length-1; i > 0; i--) {
        if (+d[i] > +d[i-1]) {
            p = i-1;
            break;
        }
    }

    if (p == -1) return p;

    var right = d.splice(p);

    var pv = right.splice(0, 1)[0];

    var mm = null, mmi = null;
    for (var i = 0; i < right.length; i++) {
        if (right[i] > pv) {
            if (mm == null || right[i] < mm) {
                mm = right[i];
                mmi = i;
            }
        }
    }

    if (mmi == null) return -1;

    right.splice(mmi, 1);
    right.push(pv);
    right = right.sort();

    var ret = +d.concat([mm]).concat(right).join('');
    if (ret < n) return -1;

    return ret;
}