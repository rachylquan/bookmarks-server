function makeBookmarksArray() {
  return [
    { id: 1,
      title: 'Thinkful',
      url: 'https://www.thinkful.com',
      description: 'Think outside the classroom',
      rating: 5 },
    { id: 2,
      title: 'Google',
      url: '',
      description: 'Where we find everything else',
      rating: 4 },
  ];
}

module.exports = {
  makeBookmarksArray,
}