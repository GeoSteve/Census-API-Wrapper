/**
 * CensusController
 *
 * @description :: Server-side logic for managing censuses
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    getPopulationByState: function(req, res) {
        var request = require('request');
        request('http://api.census.gov/data/2010/sf1?key=730e49d850365e415931ee4f3a309ffea517b92d&get=P0010001,P0030001,P0030002,P0030003,P0030004,P0030005,P0030006,P0030007,P0030008&for=state', 
            function (error, response, body) {
              if(!error && response.statusCode === 200) {
                res.json(DataConverter.mapCensusResults(body));
              }
        });
    }
};