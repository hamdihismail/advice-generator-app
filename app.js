const url =  "https://api.adviceslip.com/advice";
const result = document.querySelector('.advice');
const adviceId = document.querySelector('.advice-id');
const btn = document.querySelector('.btn');

const fetchAdvice = async () => {
    result.textContent = 'Loading...';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      const advice = data.slip.advice;
      const id = data.slip.id;
      result.textContent = advice;
      adviceId.textContent = `ADVICE # ${id}`
    } catch (error) {
      result.textContent = 'There was an error...';
    }
  };

btn.addEventListener('click', fetchAdvice)

  fetchAdvice()

  // const advice = async () => {
  //   const resp = await fetch(url)
  //   const data = await resp.json();
  //   console.log(data.slip.advice);
  // }
  // advice()