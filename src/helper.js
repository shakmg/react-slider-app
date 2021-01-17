export const getPosition = (index, personIndex, peopleLength) => {
  let position = 'nextSlide';
  if (personIndex === index) {
    position = 'activeSlide';
  }
  if (
    personIndex === index - 1 ||
    (index === 0 && personIndex === peopleLength - 1)
  ) {
    position = 'lastSlide';
  }
  return position;
};
