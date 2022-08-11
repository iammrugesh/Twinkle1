exports.getSearchData = (req, res, next) => {
    res.render('index', {
        pageTitle: 'All Data',
        path: '/'
      });
}

exports.postSearchData = (req, res, next) => {
   
}
