import qs from 'qs';
import axios from 'axios';
import strings from "../contants/strings";
import {FETCH_JOBS} from "./types";

/**
 * Created by Fatih Taşdemir on 20.09.2018
 */

const ROOT_URL = strings.apiRootUrl;
const GOOGLE_MAPS_ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
const QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 20,
    q: 'React Native'
};

const generateUrl = (zip) => {
    const query = qs.stringify({...QUERY_PARAMS, l: zip});
    return `${ROOT_URL}${query}`
};

export const fetchJobs = (region) => async (dispatch) => {
    try {
        const googleUrl = `${GOOGLE_MAPS_ROOT_URL}${region.latitude},${region.longitude}&key=${strings.googleMapApiKey}`;
        const zip = await axios.get(googleUrl);
        const url = generateUrl(zip);
        const {data} = await axios.get(url);

        dispatch({
            type: FETCH_JOBS,
            payload: data
        })
    } catch (e) {
        console.error(e)
    }

};