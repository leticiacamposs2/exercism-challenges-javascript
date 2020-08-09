export const colorCode = (cor = '') => {
    return (!cor) ? COLORS : COLORS.indexOf(cor);
};

export const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
];
