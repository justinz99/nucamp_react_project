import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
}

// export const selectRandomCampsite = () => {
//     let randIndex = Math.floor(Math.random() * CAMPSITES.length)
//     return CAMPSITES[randIndex];
// }

export const selectCampsiteById = (id) => {
    return CAMPSITES.find(campsite => campsite.id === id);
}