
const advice = document.getElementById('paragrph')
const btn = document.getElementById('btn')
const adviceId = document.getElementById('advice-id')

async function fetchData() {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    
    adviceId.textContent = `advice #${data.slip.id}` 
    advice.textContent = `"${data.slip.advice}"`
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
fetchData()

btn.addEventListener('click', fetchData)