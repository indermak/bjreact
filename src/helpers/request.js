import axios from 'axios';
import apiConstants from '../constants/api';
const env = process.env.NODE_ENV;
const { drupalUrl } = apiConstants[env];

const requestHelper = {
    getBlogs: async ({ filters = {} }) => {
        try {
            filters["fields[node--article]"] = "status,title,body,created,comment,field_image,field_description,field_tags";
            const articles = await axios.get(`${drupalUrl}/drupal/jsonapi/node/article`, { params: { ...filters } });
            return articles;
        } catch (err) {
            return {
                message: err.message,
                error: true
            }
        }
    },
    getBlog: async ({ filters = {}, blogId }) => {
        try {
            filters["fields[node--article]"] = "status,title,body,created,comment,field_image,field_description,field_tags";
            const articles = await axios.get(`${drupalUrl}/drupal/jsonapi/node/article/${blogId}`, { params: { ...filters } });
            return articles;
        } catch (err) {
            return {
                message: err.message,
                error: true
            }
        }
    },
    getBlogsDashboard: async () => {
        try {
            return await axios.get(`${drupalUrl}/drupal/api/v1.0/mutualfund`);
        } catch (err) {
            return {
                message: err.message,
                error: true
            }
        }
    },
    getBranches: async ({ type }) => {
        try {
            const branches = await axios({
                method: 'post',
                url: `https://portfolio.wealthmaker.in/wmapi/WealthMakerAPIKit.svc/GetBranch`,
                data: { BusinessType: type },
                config: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            });
            return branches;
        } catch (err) {
            return {
                message: err.message,
                error: true
            }
        }
    },
    getCategoriesDashboard: async () => {
        try {
            return await axios.get(`${drupalUrl}/drupal/api/v1.0/categories`);
        } catch (err) {
            return {
                message: err.message,
                error: true
            }
        }
    },
    getCreditCardTrending: async () => {
        try {
            return await axios.get(`https://pre-prod-cms.onebajaj.capital/services/api/category-node-list?_format=json`);
        } catch (err) {
            return {
                message: err.message,
                error: true
            }
        }
    },
    getPersonalLoansTrending: async () => {
        try {
            return await axios.get(` https://pre-prod-cms.onebajaj.capital/services/api/offer-node-list`);
        } catch (err) {
            return {
                message: err.message,
                error: true
            }
        }
    },
    getTrending: async () => {
        try {
            return await axios.get(`${drupalUrl}/drupal/api/v1.0/feature_products`);
        } catch (err) {
            return {
                message: err.message,
                error: true
            }
        }
    },
}

export default requestHelper;