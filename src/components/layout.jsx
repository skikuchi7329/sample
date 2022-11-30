const Layout = () => {

  const People = [
    'Ikd',
    'Appi',
    'Akmt',
    'Druji',
    'Shopeco',
];

  const roulette = () => {
    const random = Math.floor(Math.random() * People.length);
    document.getElementById("result").textContent = People[random];
  }

  return (
    <>
      <h1>幹事サイコロ</h1>
      <button onClick={()=>roulette()}>押せ！</button>
      <p id="result">?</p>
    </>
  )
};

export default Layout;