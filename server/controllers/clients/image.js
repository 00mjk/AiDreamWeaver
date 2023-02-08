import express from 'express';
import mongoose from 'mongoose';

import ImageModel from '../../models/ImageModel.js';
import UserModel from '../../models/userModel.js'
import FavModel from '../../models/FavouriteModel.js';
import FollowModel from '../../models/FollowModel.js';

const router = express.Router();

/**
 * @description
 *  Create image (prompt, url, negPrompt ...)
 */
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

/**
 * @description
 *  Search images by keyword 
 */
export const searchImageByKeyword = async (req, res) => {
    const { keyword } = req.body;
    try {
        const images = await ImageModel.find({ prompt: { $regex: keyword } }).sort({ created_at: -1 }).exec();
        res.status(200).json({ images: images });
    } catch (err) {
        res.status(500).json({ err });
    }
}

/**
 * @description
 *  Add or remove favourite from image.
 */
export const favouriteImg = async (req, res) => {
    let { imageId } = req.body;
    let userId = req.userId;
    try {
        let fav = await FavModel.findOne({ user_id: userId, image_id: imageId });
        let image = await ImageModel.findById(imageId);

        if (fav) await FavModel.deleteOne({ user_id: userId, image_id: imageId });
        else await FavModel.create({ user_id: userId, image_id: imageId });
        await ImageModel.findOneAndUpdate({ _id: imageId }, {
            fav_count: (fav ? (image.fav_count - 1) : (image.fav_count + 1))
        });
        image = await ImageModel.findById(imageId);

        return res.status(200).json({ image: image, isFav: (fav ? false : true) });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

/**
 * @description
 *  Get image by id.
 */
export const getImageById = async (req, res) => {
    let { imageId } = req.body;
    let userId = req.userId;

    try {
        let fav = await FavModel.findOne({ user_id: userId, image_id: imageId });
        let image = await ImageModel.findById(imageId);
        let follow = await FollowModel.findOne({ user_id: image.user_id, follower_id: userId });

        return res.status(200).json({
            image: image,
            isFav: (fav ? true : false),
            isFollow: (follow ? true : false),
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

/**
 * @description
 *  Follow image author
 */
export const followImgAuthor = async (req, res) => {
    let { authorId, isFollow } = req.body;
    let userId = req.userId;
    console.log(isFollow);
    try {
        if (isFollow)
            await FollowModel.create({ user_id: authorId, follower_id: userId });
        else
            await FollowModel.deleteOne({ user_id: authorId, follower_id: userId });

        return res.status(200).json({
            isFollow: isFollow,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}