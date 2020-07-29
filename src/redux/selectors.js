export const getAnimalObjectCountByType = (animals, neededType) => {
    return animals.filter(animal => animal.animal === neededType).length
}
