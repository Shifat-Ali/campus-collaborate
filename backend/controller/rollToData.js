
function rollToData(roll) {
    if (roll === null) {
        return {
            year: 2,
            degree: 'Btech',
            branch: 'CSE'
        };
    }

    let year = roll.slice(0, 2);
    let currentYear = new Date().getFullYear().toString().slice(2, 4);
    if (year > currentYear) {
        year = 1;
    } else {
        year = currentYear - year + 1;
    }
    let degree = roll.slice(2, 4);
    if (degree === '01') {
        degree = 'Btech';
    } else if (degree === '02') {
        degree = 'BDes';
    } else if (degree === '41') {
        degree = 'Mtech';
    } else if (degree === '61') {
        degree = 'PhD';
    }
    let branch = roll.slice(4, 6);
    if (branch === '01') {
        branch = 'CSE';
    } else if (branch === '02') {
        branch = 'ECE';
    }
    else if (branch === '03') {
        branch = 'ME';
    }
    else if (branch === '04') {
        branch = 'CE';
    }
    else if (branch === '05') {
        branch = 'Design';
    }
    else if (branch === '06') {
        branch = 'BSBE';
    }
    else if (branch === '07') {
        branch = 'CL';
    }
    else if (branch === '08') {
        branch = 'EEE';
    }
    else if (branch === '21') {
        branch = 'EP';
    }
    else if (branch === '22') {
        branch = 'CST';
    }
    else if (branch === '23') {
        branch = 'MNC';
    }
    else if (branch === '50') {
        branch = 'DSAI';
    }
    else if (branch === '51') {
        branch = 'Energy';
    }
    return {
        year: year,
        degree: degree,
        branch: branch
    };
}
module.exports = rollToData;
