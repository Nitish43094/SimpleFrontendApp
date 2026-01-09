import React, { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Home = () => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`${BASE_URL}/post/all`);
                const data = await res.json();
                // console.log(data.data)
                setPosts(data.data);
            } catch (err) {
                console.error("Error fetching posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;

    return (
        <div className="flex justify-center w-full bg-slate-500 min-h-screen p-10">
            <table className="bg-white w-[1000px] border border-gray-300">
                <thead className="bg-green-300">
                    <tr>
                        <th className="border p-3 text-left">Post</th>
                        <th className="border p-3 text-left">Body</th>
                    </tr>
                </thead>

                <tbody>
                    {posts.map((post) => (
                        <tr key={post._id}>
                            <td className="border p-3">{post.title}</td>
                            <td className="border p-3">{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
