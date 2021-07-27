import express from 'express';
import core from 'express-serve-static-core';
import apiCaller from '@common/utils/apiCaller';

const router = express.Router();
const SITE_ID = 107403796;
const BLOG_ID = 'truecaller.blog';

const fetchNavigation = async () => {
    const url = `https://public-api.wordpress.com/rest/v1/sites/${BLOG_ID}/categories/?number=6&&order_by=count`;
    try {
        return await apiCaller.get(url);

    // tslint:disable-next-line:no-useless-catch
    } catch (err) {
        throw err;
    }
};

const fetchTags = async () => {
    const url = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_ID}/tags?number=10&&order_by=count`;
    try {
        return await apiCaller.get(url);
    // tslint:disable-next-line:no-useless-catch
    } catch (err) {
        throw err;
    }
};

    // tslint:disable-next-line:no-any
    const fetchPosts = async (category?: any, tag?: any) => {
    let url = '';
    console.log(typeof category);
    // tslint:disable-next-line:prefer-conditional-expression
    if (category !== 'undefined' && tag !== 'undefined') {
       url = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_ID}/posts/?number=20&&category=${category}&&tag=${tag}`;
    } else if (category !== 'undefined') {
        url = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_ID}/posts/?number=20&&category=${category}`;
    } else if (tag !== 'undefined') {
        url = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_ID}/posts/?number=20&&tag=${tag}`;
    } else {
        url = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_ID}/posts/?number=20`;
    }
    console.log(url);
    try {
        return await apiCaller.get(url);
    // tslint:disable-next-line:no-useless-catch
    } catch (err) {
        throw err;
    }
};

router.route('/menu').get((_: core.Request, res: core.Response) => {
    // tslint:disable-next-line:no-any
    fetchNavigation().then((result: any) => {
        res.json(result.data);
    })
    .catch(err => console.log(err));
});

router.route('/tags').get((_: core.Request, res: core.Response) => {
    // tslint:disable-next-line:no-any
    fetchTags().then((result: any) => {
        res.json(result.data);
    })
    .catch(err => console.log(err));
});

router.route('/posts').get((req: core.Request, res: core.Response) => {
    console.log(req.query.category, req.query.tag);
    // tslint:disable-next-line:no-any
    fetchPosts(req.query.category, req.query.tag).then((result: any) => {
        res.json(result.data);
    })
    .catch(err => console.log(err));
});

export default router;
