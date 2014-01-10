var roll = function(s, m, n, f, a) {
    m = parseInt(m);
    if (isNaN(m)) m = 1;
    n = parseInt(n);
    if (isNaN(n)) n = 1;
    f = parseInt(f);
    a = typeof (a) == 'string' ? parseInt(a.replace(/\s/g, '')) : 0;
    if (isNaN(a)) a = 0;
    var r = 0;
    for (var i = 0; i < n; i++)
        r += Math.floor(Math.random() * f);
    return r * m + a;
};
 
var parse = function(s) {
  return roll.apply(this,
    s.match(/(?:(\d+)\s*\*\s*)?(\d*)d(\d+)(?:\s*([\+\-]\s*\d+))?/i));
}

module.exports = {
    roll: roll,
    parse: parse
};