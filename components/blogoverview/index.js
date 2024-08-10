'use client'
import { useState } from "react"
import Addnewblogpage from "@/components/addnewblogpage"


const initialBlogFormData = {
    title: '',
    description: '',
}

export default function Blogoverview() {
    const [opendialogbox, setOpendialogbox] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogformdata, setBlogformdata] = useState(initialBlogFormData);

    // console.log(blogformdata);

    async function handleBlogData() {
        setLoading(true);
        try {
           
            const api = await fetch("/api/add-blog", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', // Ensure this header is set
                },
                body: JSON.stringify(blogformdata),
            });
            const res = await api.json();
            if (res?.success){
                setBlogformdata(initialBlogFormData),
                setOpendialogbox(false),
                setLoading(false),
                alert('article saved successfully')
            }
                console.log(res);


        } catch (error) {
            console.log(error);
            setLoading(false)
            setBlogformdata(initialBlogFormData)
        }

    }

    return (
        <main className="bg-[#373A40] ">
            <Addnewblogpage
                opendialogbox={opendialogbox}
                setOpendialogbox={setOpendialogbox}
                loading={loading}
                setLoading={setLoading}
                blogformdata={blogformdata}
                setBlogformdata={setBlogformdata}
                handleBlogData={handleBlogData}
            />
        </main>
    );
}