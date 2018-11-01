db.dropdatabase();

db.movies.save(
    [
        {year:'1990', movie:'Misery'},
        {year:'1994', movie:'Lion King'},
        {year:'1998', movie:'Deep Impact'},
        {year:'2002', movie:'8 Mile'},
        {year:'2006', movie:'Silent Hill'},
        {year:'2010', movie:'Inception'},
        {year:'2014', movie:'Interstellar'},
        {year:'2018', movie:'Venom'}
    ]
);
db.directors.save(
    [
    {year:'1990', director:'Rob Reiner', movie: 'Misery'},
    {year:'1994', director:'Ron Minkoff', movie: 'Lion King'},
    {year:'1998', director:'Mimi Leder', movie: 'Deep Impact'},
    {year:'2002', director:'Curtis Hanson', movie: '8 Mile'},
    {year:'2006', director:'Christophe Gans', movie: 'Silent Hill'},
    {year:'2010', director:'Christopher Nolan', movie: 'Inception'},
    {year:'2014', director:'Christopher Nolan', movie: 'Interstellar'},
    {year:'2018', director:'Ruben Fleischer', movie: 'Venom'}
    ]
);