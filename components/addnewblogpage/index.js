'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/router'; // Import useRouter from next/router


import { useState } from 'react';

export default function AddNewBlogPage({
    opendialogbox,
    setOpendialogbox,
    loading,
    setLoading,
    blogformdata,
    setBlogformdata,
    handleBlogData
}) {
    const [errors, setErrors] = useState({ title: '', description: '' });

    const validateForm = () => {
        const newErrors = { title: '', description: '' };
        if (!blogformdata.title) newErrors.title = 'Title is required';
        if (!blogformdata.description) newErrors.description = 'Description is required';
        setErrors(newErrors);
        return Object.values(newErrors).every(error => !error);
    };

    const handleSubmit = () => {
        if (validateForm()) {
            handleBlogData();
        }
    };

    return (
        <main className="container md:flex min-h-screen bg-[#373A40] py-16 px-5">
            <div className="group flex mx-auto">
                <Button onClick={() => setOpendialogbox(true)} className="flex justify-center mx-auto uppercase bg-[#DC5F00] text-white rounded-3xl text-xl py-6 px-8 border-2 border-[#DC5F00] hover:bg-[#373A40] hover:text-[#F6F5F2]">
                    <p className="transform transition-transform duration-300 group-hover:scale-110">Add New Blog</p>
                </Button>
            </div>

            <Dialog open={opendialogbox} onOpenChange={setOpendialogbox} className="bg-[#373A40] mx-16">
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Blog</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right text-[#EEEEEE]">Title</Label>
                            <Input
                                name="title"
                                id="title"
                                placeholder="Write the title of your blog"
                                value={blogformdata.title}
                                onChange={(event) => {
                                    setBlogformdata({
                                        ...blogformdata,
                                        title: event.target.value,
                                    });
                                }}
                                className={`col-span-3 ${errors.title ? 'border-red-500' : ''}`}
                                
                            />
                            {errors.title && <p className="text-red-500 col-span-4">{errors.title}</p>}
                        </div>
                        <div className="grid grid-cols-4 items-center md:gap-4 ">
                            <Label htmlFor="description" className="text-right text-[#EEEEEE]">Description</Label>
                            <Input
                                name="description"
                                id="description"
                                placeholder="Write the description of your blog"
                                value={blogformdata.description}
                                onChange={(event) => {
                                    setBlogformdata({
                                        ...blogformdata,
                                        description: event.target.value,
                                    });
                                }}
                                className={`col-span-3 ${errors.description ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.description && <p className="text-red-500 col-span-4">{errors.description}</p>}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleSubmit} type="button" className="flex justify-center mx-auto uppercase bg-[#DC5F00] text-white rounded-3xl text-xl py-6 px-8 border-2 border-[#DC5F00] hover:bg-[#373A40] hover:text-[#F6F5F2]">
                            <p className="transform transition-transform duration-300 group-hover:scale-110">{loading ? 'Saving...' : 'Save changes'}</p>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </main>
    );
}
