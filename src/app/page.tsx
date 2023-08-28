"use client";
import { useState } from "react";

export default function Home() {
  const [getData, setgetData] = useState("");
  const [userId, setuserId] = useState("");
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [completed, setcompleted] = useState("");

  const handleGET = async () => {
    setgetData("");
    const data = await fetch("/api/place", {
      method: "GET",
    });
    const res = await data.json();
    setid(res.data.id);
    setuserId(res.data.userId);
    settitle(res.data.title);
    setcompleted(res.data.completed); 
    setgetData(JSON.stringify(res.data));
  };
  const handlePOST = async () => {
    setgetData("");
    const data = await fetch("/api/place", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        id: id,
        title: title,
        completed: completed,
      }),
    });
    const res = await data.json();
 
    setgetData(JSON.stringify(res.data));
  };

  const handlePUT = async () => {
    setgetData("");
    const data = await fetch("/api/place", {
      method: "PUT",
      body: JSON.stringify({
        userId: userId,
        id: id,
        title: title,
        completed: completed,
      }),
    });
    const res = await data.json();
    
    setgetData(JSON.stringify(res.data));
  };
  const handlePATCH = async () => {
    setgetData("");
    const data = await fetch("/api/place", {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
        
      }),
    });
    const res = await data.json();
   
    setgetData(JSON.stringify(res.data));
  };
  return (
    <div>
      <div className="flex gap-3">
        <button onClick={handleGET}>GET</button>
        <button onClick={handlePOST}>POST</button>
        <button onClick={handlePUT}>PUT</button>
        <button onClick={handlePATCH}>PATCH</button>
      </div>
      <div>
        <input
          placeholder="Enter user ID"
          value={userId}
          onChange={(e) => setuserId(e.currentTarget.value)}
        />
        <input
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setid(e.currentTarget.value)}
        />
        <input
          placeholder="Enter title"
          value={title}
          onChange={(e) => settitle(e.currentTarget.value)}
        />
        <input
          placeholder="Enter Complete"
          value={completed}
          onChange={(e) => setcompleted(e.currentTarget.value)}
        />
      </div>
      <div>Hello API ...</div>
      <div>{getData}</div>
    </div>
  );
}
