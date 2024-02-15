const assertEqual = require(`../assertEqual`)
const head = require(`../head`)

assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["ben", "hood", "ben"]), "hood");
assertEqual(head(['yes']), 'yes');
assertEqual(head([]), 1);