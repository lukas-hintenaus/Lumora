import { useGlobal } from "./GlobalContext";

export default function Dashboard(){
    const {userId, setUserId, isLoggedIn, setIsLoggedIn} = useGlobal();

  const getPublicData = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch('https://localhost:7225/api/secure', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' 
    }
  });

  if(!response.ok){
    throw new Error("Unauthorized or request failed");
  }
  
  const data = await response.json();
  console.log(data); // { message: "This is public data" }
};

getPublicData();
    return(
        <div>
            <h1>dashboard </h1>
        </div> 
    );
}