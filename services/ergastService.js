

export default class ergastService {

    static getRaces(season) {
        return new Promise((resolve, reject) => {
            fetch(`http://ergast.com/api/f1/${season}.json`)
                .then(response => response.json())
                .then(data => resolve(data.MRData.RaceTable.Races))
                .catch(reject);
        });
    }

    static getPilots(season) {
        return new Promise((resolve, reject) => {
            fetch(`http://ergast.com/api/f1/${season}/drivers.json`)
                .then(response => response.json())
                .then(data => resolve(data.MRData.DriverTable.Drivers))
                .catch(reject);
        });
    }

}