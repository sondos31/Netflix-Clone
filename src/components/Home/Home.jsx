export default function Home(){
    async function getTrending (){
        let url = process.env.REACT_KEY_SERVER;
    let response = await fetch(`${url}/trending`);
  let trendingData = await response.json();
  setTrending(trendingData);
}
    return (
      <>
        <h1>Home Page</h1>
        {
       
        }
      </>
    );
  }
