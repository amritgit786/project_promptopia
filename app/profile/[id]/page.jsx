"use client";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

const OtherUserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const queryName = searchParams.get("name");
  const [userName, setUserName] = useState(queryName || "User");
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        if (!queryName) {
          const userRes = await fetch(`/api/users/${params?.id}`);
          const userData = await userRes.json();
          setUserName(userData.username);
        }

        const postsRes = await fetch(`/api/users/${params?.id}/posts`);
        const postsData = await postsRes.json();
        setUserPosts(postsData);
      } catch (error) {
        console.log(error);
      }
    }

    if (params?.id) fetchUserData();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s profile page`}
      data={userPosts}
    />
  );
};

export default OtherUserProfile;
