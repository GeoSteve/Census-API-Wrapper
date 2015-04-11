/**
 * DataConverter
 *
 * @description :: Server-side logic for CurrentUser service
 * @help        :: See http://links.sailsjs.org/docs/services
 */

module.exports = {
    mapCensusResults: function(data) {
        data = JSON.parse(data);
        var formattedData = [];
        fields = data.shift();
        for(var d in data) {
            // console.log(data[d]);
            var rawRecord = data[d];
            var cleanRecord = {};
            for(var f in fields) {
                field = fields[f];
                if(field === 'state') {
                    field = 'GEOID';
                }
                cleanRecord[field] = rawRecord[f];
            }
            formattedData.push(cleanRecord);
        }
        return formattedData;
    }
};