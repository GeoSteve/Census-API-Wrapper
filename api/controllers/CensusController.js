/**
 * CensusController
 *
 * @description :: Server-side logic for managing censuses
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    getPopulationByState: function(req, res) {
        var request = require('request');
        request('http://api.census.gov/data/2010/sf1?key=730e49d850365e415931ee4f3a309ffea517b92d&get=P0010001&for=state', 
            function (error, response, body) {
              if(!error && response.statusCode === 200) {
                // res.setHeader('Content-Type', 'application/json');
                // res.send(JSON.stringify(DataConverter.mapCensusResults(body)));
                res.json(DataConverter.mapCensusResults(body));
              }
        });
    }
};