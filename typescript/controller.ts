import fetch from 'node-fetch';

export const Widok0 = (req, res) => {
    res.render('Widok0', {title: 'Widok.0'});
};

export const Widok1 = async (req, res) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${req.params.region}`);
        const data = await response.json();

        res.render('Widok1', {title: 'Widok.1', fetchData: data});
    } catch(err) {
        console.log(err);
        res.redirect('/404');
    }
};

export const Widok2 = async (req, res) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${req.params.name}`);
        const data = await response.json();

        res.render('Widok2', {title: 'Widok.2', fetchData: data});
    } catch(err) {
        console.log(err);
        res.redirect('/404');
    }
};

export const omnie = (req, res) => {
    res.render('Widok0', {title: 'O mnie'});
};