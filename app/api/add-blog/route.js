import Joi from "joi";
import { connect } from "mongoose";
import { NextResponse } from "next/server";
import Blog from "@/app/models/blog";
import ConnectTodb from "@/app/database";



const AddNewBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
})

export async function POST(req) {

    try {
        await ConnectTodb();

        const extractBlogData = await req.json();
        const { title, description } = extractBlogData;


        const { error } = AddNewBlog.validate({
            title, description
        })

        if (error) {
            return NextResponse.json({
                success: false,
                message: error.details[0].message
            })
        }

        const newlycreatedblogitem = await Blog.create(extractBlogData);
        if (newlycreatedblogitem) {
            return NextResponse.json({
                success: true,
                message: 'blog added successfully'
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'something went wrong ... please try again'
            })
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'something went wrong ... please try again'
        })

    }
}