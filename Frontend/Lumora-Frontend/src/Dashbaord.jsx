import GetNewAccessToken from "./security/GetNewToken";

export default function Dashboard(){

  const getPublicData = async () => {
    const accessToken = localStorage.getItem("accesstoken");
    const response = await fetch('https://localhost:7225/api/secure', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json' 
    }
  });

  if(!response.ok){
    throw new Error("Unauthorized or request failed");
  }
  
  const data = await response.json();
  console.log(data); // { message: "This is public data" }
};
  try{
    getPublicData();
  }
  catch{
    GetNewAccessToken();
  }
  finally{
    getPublicData();
  }

    return(
        <div>
            <h1>dashboard</h1>
        </div> 
    );
}