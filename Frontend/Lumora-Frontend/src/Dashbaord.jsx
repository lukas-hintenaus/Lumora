import GetNewAccessToken from "./security/GetNewToken";
import { useEffect } from "react";

export default function Dashboard() {

  const fetchSecureData = async () => {
    try {
      const accessToken = localStorage.getItem("accesstoken");

      let response = await fetch("https://localhost:7225/api/secure", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      });

      // 🔐 Access token expired
      if (response.status === 401) {
        const refreshed = await GetNewAccessToken();
        if (!refreshed) throw new Error("Unauthorized");

        const newToken = localStorage.getItem("accesstoken");

        response = await fetch("https://localhost:7225/api/secure", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${newToken}`,
            "Content-Type": "application/json"
          }
        });
      }

      if (!response.ok) {
        throw new Error("Unauthorized");
      }

      const data = await response.json();
      console.log(data);

    } catch (err) {
      console.error(err);
      // redirect to login here
    }
  };

  useEffect(() => {
    fetchSecureData();
  }, []);

  return (
    <div>
      <h1>dashboard</h1>
    </div>
  );
}
