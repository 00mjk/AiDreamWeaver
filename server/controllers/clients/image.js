import express from 'express';
import mongoose from 'mongoose';

import ImageModel from '../../models/ImageModel.js';
import UserModel from '../../models/userModel.js'

const router = express.Router();

export const createImage = async (req, res) => {
    const { images, prompt, negPrompt, initImgUrl, width, height, guidianceScale, qualityDetails, seed, sampler } = req.body;

    try {
        // Get User
        const user = await UserModel.findById(req.userId);
        // Add Records    
        const cnt = images.length;
        let newImages = [];
        for (let i = 0; i < cnt; i++) {
            const newImage = new ImageModel({
                url: images[i],
                user_id: req.userId,
                user_avatar: user?.avatar,
                user_name: user.name,
                name: prompt,
                prompt: prompt,
                negative_prompt: negPrompt,
                init_img_url: initImgUrl,
                width: width,
                height: height,
                guidance_scale: guidianceScale,
                quality_details: qualityDetails,
                seed: seed,
                sampler: sampler,
            });
            await newImage.save();
            console.log(newImage);
            newImages[i] = newImage;
        }
        res.status(200).json(newImages);
    } catch (err) {
        res.status(500).json({ err });
    }
}

export const searchImageByKeyword = async (req, res) => {
    const { keyword } = req.body;
    try {
        console.log(keyword);
        const images = await ImageModel.find({ prompt: { $regex: keyword } }).sort({ created_at: -1 }).exec();
        res.status(200).json({ images: images });
    } catch (err) {
        res.status(500).json({ err });
    }
}