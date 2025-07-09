export const upbringing = [
    { min: 1, max: 10, description: 'Ödemarken', table: 'odemarken' },
    { min: 11, max: 20, description: 'Landsbygden', table: 'landsbygden'},
    { min: 21, max: 50, description: 'Förorten', table: 'fororten'},
    { min: 51, max: 80, description: 'Storstadsslummen', table: 'storstadsslummen'},
    { min: 81, max: 98, description: 'Företagsdistriktet', table: 'foretagsdistriktet'},
    { min: 99, max: 100, description: 'Rymden', table: 'rymden'}
]

export const odemarken = [
     { min: 1, max: 40, socialClass: 'bg-hemlos' },
     { min: 41, max: 95, socialClass: 'bg-underklass' },
     { min: 96, max: 98, socialClass: 'bg-medelklass' },
     { min: 99, max: 99, socialClass: 'bg-overklass' },
     { min: 100, max: 100, socialClass: 'bg-socialElit' },
]

export const landsbygden = [
     { min: 1, max: 20, socialClass: 'bg-hemlos' },
     { min: 21, max: 60, socialClass: 'bg-underklass' },
     { min: 61, max: 95, socialClass: 'bg-medelklass' },
     { min: 96, max: 98, socialClass: 'bg-overklass' },
     { min: 100, max: 100, socialClass: 'bg-socialElit' },
]

export const fororten = [
     { min: 1, max: 5, socialClass: 'bg-hemlos' },
     { min: 6, max: 20, socialClass: 'bg-underklass' },
     { min: 21, max: 80, socialClass: 'bg-medelklass' },
     { min: 81, max: 95, socialClass: 'bg-overklass' },
     { min: 96, max: 100, socialClass: 'bg-socialElit' },
]

export const storstadsslummen = [
     { min: 1, max: 30, socialClass: 'bg-hemlos' },
     { min: 31, max: 90, socialClass: 'bg-underklass' },
     { min: 91, max: 98, socialClass: 'bg-medelklass' },
     { min: 99, max: 99, socialClass: 'bg-overklass' },
     { min: 100, max: 100, socialClass: 'bg-socialElit' },
]

export const foretagsdistriktet = [
     { min: 1, max: 3, socialClass: 'bg-hemlos' },
     { min: 4, max: 20, socialClass: 'bg-underklass' },
     { min: 21, max: 80, socialClass: 'bg-medelklass' },
     { min: 81, max: 95, socialClass: 'bg-overklass' },
     { min: 96, max: 100, socialClass: 'bg-socialElit' },
]

export const rymden = [
     { min: 1, max: 1, socialClass: 'bg-hemlos' },
     { min: 2, max: 10, socialClass: 'bg-underklass' },
     { min: 11, max: 80, socialClass: 'bg-medelklass' },
     { min: 81, max: 95, socialClass: 'bg-overklass' },
     { min: 96, max: 100, socialClass: 'bg-socialElit' },
]
