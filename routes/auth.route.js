import express from 'express';
import { google, signOut, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: All APIs
 *   description: Signup -> Signin -> SignOut 
 */
/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     summary: User SignUp
 *     tags: [Signup]
 *     requestBody:
 *       required: true
 *       content:
 *         cookie:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: User's full name
 *               email:
 *                 type: string
 *                
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 
 *                 description: User's password (at least 6 characters)
 *     responses:
 *       200:
 *         description: Successful signup
 *         content:
 *           cookie:
 *             example:
 *               token: <access_token>
 *       400:
 *         description: Bad request (validation errors)
 *         content:
 *           cookie:
 *             example:
 *               errors: [{ msg: 'Please enter your full name.' }, { msg: 'Please enter your email address.' }, { msg: 'Please insert at least 6 characters.' }]
 *       409:
 *         description: Conflict (user already exists)
 *         content:
 *           application/json:
 *             example:
 *               msg: 'User already exists'
 *       500:
 *         description: Internal server error
 *         content:
 *           cookie:
 *             example:
 *               msg: 'Server error'
 */

router.post("/signup", signup);


/**
 *  @swagger
 * /api/v1/auth/signin:
 *   post:
 *     summary: User signin
 *     tags: [Signin]
 *     requestBody:
 *       required: true
 *       content:
 *         cookie:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format : email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password (at least 6 characters)
 *     responses:
 *       200:
 *         description: Successful Signin
 *         content:
 *           cookie:
 *             example:
 *               token: <access_token>
 *       400:
 *         description: Bad request (validation errors)
 *         content:
 *           cookie:
 *             example:
 *               errors: [{ msg: 'Please enter your email address.' }, { msg: 'Please insert at least 6 characters.' }]
 *       409:
 *         description:  Bad request ( user not exists)
 *         content:
 *           cookie:
 *             example:
 *               msg: 'User Not exists'
 *       500:
 *         description: Internal server error
 *         content:
 *           cookie:
 *             example:
 *               msg: 'Server error'
 */



router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signOut)

export default router;