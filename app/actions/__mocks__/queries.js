const words = ['Hello', 'Hello', 'Bob', 'Hello'];

export function getAllUniqueWords() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      resolve(words);
    });
  });
};

