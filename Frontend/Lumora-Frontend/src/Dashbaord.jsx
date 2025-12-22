import { useGlobal } from "./GlobalContext";

export default function Dashboard(){
    const {userId, setUserId, isLoggedIn, setIsLoggedIn} = useGlobal();
    return(
        <div>
            <h1>dashboard </h1>
            <h1>is logged in: {isLoggedIn} </h1>
            <h1>user id: {userId}</h1>
        </div>
    );
}