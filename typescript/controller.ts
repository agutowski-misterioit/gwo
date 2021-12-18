import fetch from 'node-fetch';

export const Widok0 = (req, res) => {
    res.render('Widok0', {title: 'Widok.0'});
};

export const Widok1 = async (req, res) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${req.params.region}`);
        const data = await response.json();
        const dataSort = JSON.parse(JSON.stringify(data)).sort((a, b) => {
            if( a.name.common > b.name.common) {
                return 1;
            }
            if( a.name.common < b.name.common) {
                return -1;
            }

            return 0;
        });
        const headerTitle = (req.params.region).charAt(0).toUpperCase() + (req.params.region).slice(1);

        res.render('Widok1', {title: 'Widok.1', fetchData: dataSort, headerTitle: headerTitle});
    } catch(err) {
        console.log(err);
        res.redirect('/404');
    }
};

export const Widok2 = async (req, res) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${req.params.name}`);
        const data = await response.json();
        const headerTitle = req.params.region;
        res.render('Widok2', {title: 'Widok.2', fetchData: data, headerTitle: headerTitle});
    } catch(err) {
        console.log(err);
        res.redirect('/404');
    }
};

export const omnie = (req, res) => {
    res.render('Widok0', {title: 'O mnie'});
};