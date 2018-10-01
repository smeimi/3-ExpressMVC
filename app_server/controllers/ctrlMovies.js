
const winnerlist = function(req, res){
    res.render('movies',{
        winners:
        [
            {year:'1990', movie:'Misery'},
            {year:'1994', movie:'Lion King'},
            {year:'1998', movie:'Deep Impact'},
            {year:'2002', movie:'8 Mile'},
            {year:'2006', movie:'Silent Hill'},
            {year:'2010', movie:'Inception'},
            {year:'2014', movie:'Interstellar'},
            {year:'2018', movie:'Venom'}
        ]});
};
module.exports = {
    winnerlist
};