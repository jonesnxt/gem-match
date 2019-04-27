// High score table stuff
import Request from '../../../koji_utilities/request';
import Routes from '../../../koji_utilities/routes';

function getScores() {
    return new Promise((resolve, reject) => {
        Request(Routes.GetScores).then((response) => {
            resolve(response);
        })
    })
}

function addScore(name, score) {
    return new Promise((resolve, reject) => {
        Request(Routes.AddScore, {
            body: {
                name,
                score,
            }
        }).then((response) => {
            console.log(response);
        })
    });
}

export default {
    getScores,
    addScore,
};
