function delayedFetch(dataArray) {
    return dataArray.map((item, index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(item);
        }, index * 2000); 
      });
    });
  }
  async function executeFetch(promisesArray) {
    for (const promise of promisesArray) {
      const result = await promise;
      console.log(result);
    }
  }
  
  const data = [1,2,3,4,5];
  const promises = delayedFetch(data);
  executeFetch(promises);
